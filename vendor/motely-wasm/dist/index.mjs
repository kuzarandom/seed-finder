// __uint8-base64-polyfill__
{
    const __U8 = Uint8Array;
    const __proto = Uint8Array.prototype;
    const __hasBuffer = typeof Buffer === "function" && typeof Buffer.from === "function";
    const __normalize = (s, opts) =>
        opts?.alphabet === "base64url" ? s.replace(/-/g, "+").replace(/_/g, "/") : s;
    const __decodeB64 = (s, opts) => {
        if (__hasBuffer)
            return new Uint8Array(Buffer.from(s, opts?.alphabet === "base64url" ? "base64url" : "base64"));
        const bin = atob(__normalize(s, opts).replace(/=+$/, ""));
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        return bytes;
    };
    const __decodeHex = (s) => {
        if (__hasBuffer) return new Uint8Array(Buffer.from(s, "hex"));
        const bytes = new Uint8Array(s.length >> 1);
        for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(s.substr(i * 2, 2), 16);
        return bytes;
    };
    const __view = (u8) => u8 instanceof Uint8Array ? u8 : new Uint8Array(u8.buffer, u8.byteOffset, u8.byteLength);
    if (typeof __U8.fromBase64 !== "function")
        __U8.fromBase64 = (s, opts) => __decodeB64(s, opts);
    if (typeof __U8.fromHex !== "function")
        __U8.fromHex = (s) => __decodeHex(s);
    if (typeof __proto.toBase64 !== "function")
        __proto.toBase64 = function (opts) {
            if (__hasBuffer) {
                const enc = opts?.alphabet === "base64url" ? "base64url" : "base64";
                return Buffer.from(this.buffer, this.byteOffset, this.byteLength).toString(enc);
            }
            let bin = "";
            const view = __view(this);
            for (let i = 0; i < view.length; i++) bin += String.fromCharCode(view[i]);
            const b64 = btoa(bin);
            return opts?.alphabet === "base64url"
                ? b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                : b64;
        };
    if (typeof __proto.toHex !== "function")
        __proto.toHex = function () {
            if (__hasBuffer)
                return Buffer.from(this.buffer, this.byteOffset, this.byteLength).toString("hex");
            const view = __view(this);
            let hex = "";
            for (let i = 0; i < view.length; i++) hex += view[i].toString(16).padStart(2, "0");
            return hex;
        };
    if (typeof __proto.setFromBase64 !== "function")
        __proto.setFromBase64 = function (s, opts) {
            const bytes = __decodeB64(s, opts);
            const written = Math.min(bytes.length, this.byteLength);
            this.set(bytes.subarray(0, written));
            return { read: written, written };
        };
    if (typeof __proto.setFromHex !== "function")
        __proto.setFromHex = function (s) {
            const bytes = __decodeHex(s);
            const written = Math.min(bytes.length, this.byteLength);
            this.set(bytes.subarray(0, written));
            return { read: written, written };
        };
}
import { boot, exit, getStatus, BootStatus } from "./boot.mjs";
import { manifest } from "./resources.mjs";
import { app } from "./dotnet/index.mjs";
export default {
    boot,
    exit,
    getStatus,
    BootStatus,
    manifest,
    dotnet: app.dotnet
};
export * from "./bcl/index.mjs";
export * from "./generated/modules/index.g.mjs";
