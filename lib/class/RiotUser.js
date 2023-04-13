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
var _RiotUser_riotAPI;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Champion_1 = __importDefault(require("./Champion"));
class RiotUser {
    /**
     *
     * @param username Name of the target account
     * @param apiVersion Version of API (Use the API constructor to get API version)
     * @param lang Language code (Ex: "en_US")
     */
    constructor(options) {
        _RiotUser_riotAPI.set(this, void 0);
        this.username = options.username;
        this.apiVersion = options.apiVersion;
        this.apiKey = options.apiKey;
        this.lang = options.lang || "en_US";
        this.server = options.server;
        __classPrivateFieldSet(this, _RiotUser_riotAPI, `https://${this.server}.api.riotgames.com/lol`, "f");
        this.getSummonerID();
    }
    /**
     *
     * @param championName Name of the champion (Case sensitive !)
     */
    getMastery(championName) {
        return __awaiter(this, void 0, void 0, function* () {
            const champion = new Champion_1.default({
                championName,
                apiVersion: this.apiVersion,
                lang: this.lang
            });
            return new Promise((resolve, reject) => {
                champion.getChampionDatas().then((data) => {
                    axios_1.default.get(`${__classPrivateFieldGet(this, _RiotUser_riotAPI, "f")}/champion-mastery/v4/champion-masteries/by-summoner/${this.summonerID}/by-champion/${data.key}`, {
                        headers: {
                            "X-Riot-Token": this.apiKey
                        }
                    }).then(r => {
                        resolve({
                            name: championName,
                            championLevel: r.data.championLevel,
                            championPoints: r.data.championPoints,
                        });
                    }).catch(e => {
                        if (e.response.status === 404) {
                            reject("This user has no mastery on this champion");
                        }
                        else {
                            reject(e);
                        }
                    });
                }).catch(reject);
            });
        });
    }
    /**
     *
     * @returns Encrypted Summoner ID (view https://developer.riotgames.com)
     */
    getSummonerID() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default.get(`${__classPrivateFieldGet(this, _RiotUser_riotAPI, "f")}/summoner/v4/summoners/by-name/${this.username}`, {
                    headers: {
                        "X-Riot-Token": this.apiKey
                    }
                }).then(r => {
                    this.summonerID = r.data.id;
                    resolve(r.data.id);
                }).catch(reject);
            });
        });
    }
    getSummonerDatas() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default.get(`${__classPrivateFieldGet(this, _RiotUser_riotAPI, "f")}/summoner/v4/summoners/by-name/${this.username}`, {
                    headers: {
                        "X-Riot-Token": this.apiKey
                    }
                }).then((r) => {
                    resolve(r.data);
                }).catch(reject);
            });
        });
    }
}
_RiotUser_riotAPI = new WeakMap();
exports.default = RiotUser;
//# sourceMappingURL=RiotUser.js.map