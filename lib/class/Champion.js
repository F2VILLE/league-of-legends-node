"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default
                    .get(`http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/data/${params.lang}/champion.json`)
                    .then((res) => {
                    const r = res.data;
                    const champions = Object.values(r.data).map((x) => {
                        x.image.url = `http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/img/champion/${x.image.full}`;
                        return x;
                    });
                    resolve(champions);
                })
                    .catch(reject);
            });
        });
    }
    splashImageURL() {
        return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/img/champion/splash/${this.id}_0.jpg`;
    }
    iconImageURL() {
        return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/img/champion/${this.id}.png`;
    }
    loadingImageURL() {
        return `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/img/champion/loading/${this.id}_0.jpg`;
    }
    getSpell(key) {
        const keys = ["Q", "W", "E", "R"];
        return this.data.spells[keys.indexOf(key)];
    }
    getChampionDatas() {
        return new Promise((resolve, reject) => {
            axios_1.default
                .get(`${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/data/${this.lang}/champion/${this.id}.json`)
                .then((res) => {
                const r = res.data;
                this.data = r.data[this.id];
                this.data.image.url = `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/img/champion/${this.data.image.full}`;
                for (const spell of this.data.spells) {
                    spell.image.url = `${__classPrivateFieldGet(this, _Champion_ddragonAPI, "f")}/${this.apiVersion}/img/spell/${spell.id}.png`;
                }
                resolve(r.data[this.id]);
            })
                .catch(reject);
        });
    }
}
_Champion_ddragonAPI = new WeakMap();
exports.default = Champion;
//# sourceMappingURL=Champion.js.map