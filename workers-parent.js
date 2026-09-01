class Deferred {
  promise;
  resolve = () => {};
  reject = () => {};
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

let workersState = [];
let pendingJaml = null;
let pendingTargets = null;
let currentFinish = null;
let currentOnFound = null;
let currentMaxResults = 32;
let currentSeen = new Set();

function motelyModuleUrl() {
  return new URL("./vendor/motely-wasm/dist/index.mjs", window.location.href)
    .href;
}

function threadCount() {
  return Math.min(4, Math.max(1, window.navigator.hardwareConcurrency || 2));
}

function runTaskWithWorkers(jaml, targets, options = {}) {
  const dfd = new Deferred();
  let settled = false;
  currentOnFound = options.onFound || null;
  currentMaxResults = options.maxResults || 32;
  currentSeen = new Set();
  pendingJaml = jaml;
  pendingTargets = targets;

  currentFinish = (payload) => {
    if (settled) return;
    settled = true;
    pendingJaml = null;
    pendingTargets = null;
    currentFinish = null;
    for (const workerState of workersState) {
      try {
        workerState.port.postMessage({ type: "stop" });
      } catch {}
    }
    dfd.resolve(payload);
  };

  if (workersState.length === 0) {
    startWorkerPool();
  } else {
    workersState.forEach((workerState, i) => {
      workerState.tries = 0;
      workerState.timeSpent = 0;
      workerState.timeStart = performance.now();
      workerState.port.postMessage({
        type: "search",
        jaml,
        targets,
        startBatch: searchStartBatch(i),
        stride: threadCount(),
      });
    });
  }

  return dfd.promise;
}

function startWorkerPool() {
  const threads = threadCount();
  const motelyUrl = motelyModuleUrl();

  for (let i = 0; i < threads; i++) {
    const worker = new Worker("worker.js", { type: "module" });
    const channel = new MessageChannel();
    const workerState = {
      worker,
      port: channel.port2,
      timeSpent: 0,
      tries: 0,
      timeStart: performance.now(),
      ready: false,
    };
    workersState.push(workerState);

    channel.port2.onmessage = (msg) => {
      workerState.timeSpent = performance.now() - workerState.timeStart;
      const data = msg.data;

      if (data.type === "ready") {
        workerState.ready = true;
        if (pendingJaml) {
          workerState.timeStart = performance.now();
          workerState.port.postMessage({
            type: "search",
            jaml: pendingJaml,
            targets: pendingTargets,
            startBatch: searchStartBatch(i),
            stride: threadCount(),
          });
        }
        return;
      }
      if (data.type === "progress") {
        workerState.tries = data.tries;
        return;
      }
      if (data.type === "found" && currentFinish) {
        workerState.tries = data.tries;
        if (currentSeen.has(data.seed)) return;
        currentSeen.add(data.seed);
        const status = taskStatus();
        const hit = {
          seed: data.seed,
          tries: status.tries,
          time: status.timeSpent,
          locations: data.locations || {},
        };
        if (currentOnFound) currentOnFound(hit);
        if (currentSeen.size >= currentMaxResults) currentFinish({ done: true });
        return;
      }
      if (data.type === "error" && currentFinish) {
        currentFinish({ error: data.error });
      }
    };

    worker.onerror = (event) => {
      if (currentFinish) {
        currentFinish({
          error: event.message || "Motely worker failed to start",
        });
      }
    };

    worker.postMessage({ port: channel.port1, motelyUrl }, [channel.port1]);
  }
}

function searchStartBatch(workerIndex) {
  const totalBatches = 35 ** 5;
  const base = Math.floor(Math.random() * totalBatches);
  return (base + workerIndex) % totalBatches;
}

function stopWorkers() {
  if (currentFinish) currentFinish({ done: true, cancelled: true });
  pendingJaml = null;
  pendingTargets = null;
  for (const workerState of workersState) {
    workerState.worker.terminate();
  }
  workersState = [];
}

function taskStatus() {
  let tries = 0;
  let timeSpent = 0;

  workersState.forEach((workerState) => {
    tries += workerState.tries;
    if (workerState.timeSpent > timeSpent) {
      timeSpent = workerState.timeSpent;
    }
  });

  return {
    tries,
    timeSpent: parseDomTimestamp(timeSpent),
  };
}

function parseDomTimestamp(timestamp) {
  return (timestamp / 1000).toFixed(3);
}
