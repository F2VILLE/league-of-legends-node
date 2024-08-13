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
var _Item_ddragonAPI;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Item {
    constructor(options) {
        _Item_ddragonAPI.set(this, void 0);
        this.id = options.id;
        this.name = options.name;
        this.apiVersion = options.apiVersion;
        this.lang = options.lang || "en_US";
        __classPrivateFieldSet(this, _Item_ddragonAPI, `http://ddragon.leagueoflegends.com/cdn`, "f");
    }
    static getAll(apiVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                axios_1.default
                    .get(`http://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/en_US/item.json`)
                    .then((res) => {
                    const r = res.data;
                    const items = [];
                    for (const key of Object.keys(r.data)) {
                        const it = r.data[key];
                        it.id = key;
                        it.image.url = `http://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/item/${it.image.full}`;
                        items.push(it);
                    }
                    resolve(items);
                })
                    .catch(reject);
            });
        });
    }
    iconImageURL() {
        if (!this.data) {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield this.getItemData();
                resolve(`${__classPrivateFieldGet(this, _Item_ddragonAPI, "f")}/${this.apiVersion}/img/item/${this.data.image.full}.png`);
            }));
        }
        return `${__classPrivateFieldGet(this, _Item_ddragonAPI, "f")}/${this.apiVersion}/img/item/${this.id}.png`;
    }
    getItemData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const items = yield Item.getAll(this.apiVersion);
                const item = items.find(x => x.name == this.name || x.id == this.id);
                if (!item) {
                    reject("Item not found");
                }
                this.data = item;
                resolve(item);
            }));
        });
    }
}
_Item_ddragonAPI = new WeakMap();
exports.default = Item;
//# sourceMappingURL=Item.js.map