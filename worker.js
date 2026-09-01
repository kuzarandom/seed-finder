let engine = null;
let port = null;
let totalTried = 0;
let searching = false;
let runChain = Promise.resolve();

const BATCH_CHARS = 3;
const TOTAL_BATCHES = 35 ** (8 - BATCH_CHARS);

self.onmessage = (e) => {
  self.onmessage = null;
  port = e.data.port;
  const motelyUrl = e.data.motelyUrl;

  port.onmessage = (ev) => {
    const msg = ev.data;
    if (msg.type === "stop") {
      searching = false;
      return;
    }
    if (msg.type === "search") {
      searching = false;
      runChain = runChain.then(() =>
        runSearch(msg.jaml, msg.startBatch, msg.stride, msg.targets)
      );
    }
  };

  (async () => {
    try {
      engine = await import(motelyUrl);
      if (engine.default.getStatus() === engine.default.BootStatus.Standby) {
        await engine.default.boot();
      }
      engine.MotelySearch.onProgress.subscribe((p) => {
        if (!searching) return;
        port.postMessage({
          type: "progress",
          tries: totalTried + Number(p.seedsSearched),
        });
      });
      port.postMessage({ type: "ready" });
    } catch (err) {
      port.postMessage({
        type: "error",
        error: String(err && err.message ? err.message : err),
      });
    }
  })();
};

async function runSearch(jaml, startBatch, stride, targets) {
  searching = true;
  totalTried = 0;
  let batch = startBatch % TOTAL_BATCHES;
  const wantShopOrder = (targets?.jokersShop || []).length >= 2;
  const stopAfter = wantShopOrder ? 48n : 8n;
  const posted = new Set();

  try {
    const config = engine.MotelyJaml.fromJaml(jaml);

    while (searching) {
      const results = await engine.MotelySearch.collectSequential(
        config,
        stopAfter,
        BigInt(batch),
        BigInt(batch + 1),
        BATCH_CHARS
      );

      if (!searching) return;

      for (let i = 0; i < results.length; i++) {
        if (!searching) return;
        const seed = results[i].seed;
        if (posted.has(seed)) continue;
        let locations = {};
        try {
          locations = locateTargets(seed, targets || {});
        } catch (locateErr) {
          console.error(locateErr);
        }
        if (wantShopOrder && !shopOrderOk(locations, targets)) continue;
        posted.add(seed);
        port.postMessage({
          type: "found",
          seed,
          tries: totalTried + i + 1,
          locations,
        });
      }

      totalTried += 35 ** BATCH_CHARS;
      port.postMessage({ type: "progress", tries: totalTried });
      batch = (batch + stride) % TOTAL_BATCHES;
    }
  } catch (err) {
    searching = false;
    port.postMessage({
      type: "error",
      error: String(err && err.message ? err.message : err),
    });
  }
}

function itemName(item) {
  return engine.MotelyItemType[item.type] || "";
}

function editionName(item) {
  const name = engine.MotelyItemEdition[item.edition];
  return name && name !== "None" ? name : "";
}

function displayAnte(ante) {
  // Jamlyzer `ante` is already the in-game ante (0, 1, 2, …).
  return ante.ante;
}

function shopKey(item) {
  const ante = Number(item.ante);
  const slot = Number(item.slot);
  if (!Number.isFinite(ante) || !Number.isFinite(slot)) return Infinity;
  return ante * 100 + slot;
}

function shopOrderOk(locations, targets) {
  const wanted = targets?.jokersShop || [];
  if (wanted.length < 2) return true;
  const found = locations?.jokersShop || [];
  if (found.length < wanted.length) return false;
  for (let i = 1; i < wanted.length; i++) {
    if (shopKey(found[i - 1]) > shopKey(found[i])) return false;
  }
  return true;
}

function locateTargets(seed, targets) {
  const analyzeCfg = engine.MotelyJaml.fromJaml(`name: analyze
deck: Red
stake: White
seeds: [${seed}]
should:
  - joker: Joker
    score: 1
`);
  const analysis = engine.MotelyJamlyzer.analyzeSeeds(analyzeCfg)[0];
  const legendaries = [];
  const vouchers = [];
  const jokersPack = [];
  const jokersShop = [];
  const ankh = [];

  const souls = [];
  for (const ante of analysis.antes) {
    ante.packs.forEach((pk, packIdx) => {
      pk.items.forEach((it) => {
        if (itemName(it) === "TheSoul") {
          souls.push({
            ante: displayAnte(ante),
            pack: packIdx + 1,
            packType: engine.MotelyBoosterPack[pk.pack] || "Pack",
          });
        }
      });
    });
  }

  const legendStream = analysis.antes[0]?.pulls?.legendaryJokers || [];
  (targets.legendaries || []).forEach((want) => {
    for (let i = 0; i < legendStream.length; i++) {
      if (itemName(legendStream[i]) !== want.id) continue;
      const soul = souls[i];
      legendaries.push({
        label: want.label,
        ante: soul ? soul.ante : "-",
        pack: soul ? soul.pack : "-",
        packType: soul ? soul.packType : "",
        edition: editionName(legendStream[i]),
      });
      break;
    }
  });

  (targets.vouchers || []).forEach((want) => {
    for (const ante of analysis.antes) {
      if (engine.MotelyVoucher[ante.voucher] !== want.id) continue;
      vouchers.push({
        label: want.label,
        ante: displayAnte(ante),
      });
      break;
    }
  });

  const wantedPack = new Map(
    (targets.jokersPack || []).map((want) => [want.id, want])
  );
  if (wantedPack.size > 0) {
    outerPack: for (const ante of analysis.antes) {
      for (let packIdx = 0; packIdx < ante.packs.length; packIdx++) {
        const pk = ante.packs[packIdx];
        const packType = engine.MotelyBoosterPack[pk.pack] || "Pack";
        for (let slot = 0; slot < pk.items.length; slot++) {
          const it = pk.items[slot];
          const want = wantedPack.get(itemName(it));
          if (!want) continue;
          jokersPack.push({
            label: want.label,
            ante: displayAnte(ante),
            pack: packIdx + 1,
            slot: slot + 1,
            packType,
            edition: editionName(it),
          });
          break outerPack;
        }
      }
    }
  }

  (targets.jokersShop || []).forEach((want) => {
    outerShop: for (const ante of analysis.antes) {
      for (let slot = 0; slot < ante.shopItems.length; slot++) {
        const it = ante.shopItems[slot];
        if (itemName(it) !== want.id) continue;
        jokersShop.push({
          label: want.label,
          ante: displayAnte(ante),
          slot: slot + 1,
          edition: editionName(it),
        });
        break outerShop;
      }
    }
  });

  if (targets.ankh) {
    outerAnkh: for (const ante of analysis.antes) {
      for (let packIdx = 0; packIdx < ante.packs.length; packIdx++) {
        const pk = ante.packs[packIdx];
        for (let slot = 0; slot < pk.items.length; slot++) {
          if (itemName(pk.items[slot]) !== "Ankh") continue;
          ankh.push({
            label: "Ankh",
            ante: displayAnte(ante),
            pack: packIdx + 1,
            slot: slot + 1,
            packType: engine.MotelyBoosterPack[pk.pack] || "Pack",
          });
          break outerAnkh;
        }
      }
    }
  }

  return { legendaries, vouchers, jokersPack, jokersShop, ankh };
}
