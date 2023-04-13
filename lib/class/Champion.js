"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Champion_ddragonAPI;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Champion {
    constructor(options) {
        _Champion_ddragonAPI.set(this, void 0);
        this.id = options.championName;
        this.apiVersion = options.apiVersion;
        this.lang = options.lang || "en_US";
        __classPrivateFieldSet(this, _Champion_ddragonAPI, `http://ddragon.leagueoflegends.com/cdn`, "f");
    }
    splashImageURL() { return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/img/champion/splash/${this.id}_0.jpg`; }
    iconImageURL() { return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/img/champion/${this.id}.png`; }
    loadingImageURL() { return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/img/champion/loading/${this.id}_0.jpg`; }
    getChampionDatas() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/data/${this.lang}/champion/${this.id}.json`).then(res => {
                const r = res.data;
                resolve(r.data[this.id]);
            }).catch(reject);
        });
    }
}
_Champion_ddragonAPI = new WeakMap();
exports.default = Champion;
//# sourceMappingURL=Champion.js.map