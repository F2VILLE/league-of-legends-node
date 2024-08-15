import axios from "axios";
import Langs from "../types/Langs";

type ItemOptions = {
  name?: string;
  id?: string;
  apiVersion: string;
  lang?: Langs;
};

type ItemAPIType = {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    url?: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: true;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: string]: boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
};

class Item {
  id: string;
  name: string;
  apiVersion: string;
  #ddragonAPI: string;
  lang: Langs;
  data: ItemAPIType;
  constructor(options: ItemOptions) {
    this.id = options.id;
    this.name = options.name;
    this.apiVersion = options.apiVersion;
    this.lang = options.lang || "en_US";
    this.#ddragonAPI = `http://ddragon.leagueoflegends.com/cdn`;
  }

  static async getAll(params: {
    apiVersion: string;
    lang: Langs;
  }): Promise<ItemAPIType[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/data/${params.lang}/item.json`
        )
        .then((res) => {
          const r = res.data;
          const items: ItemAPIType[] = [];
          for (const key of Object.keys(r.data)) {
            const it = r.data[key] as ItemAPIType;
            it.id = key;
            it.image.url = `http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/img/item/${it.image.full}`;
            items.push(it);
          }
          resolve(items);
        })
        .catch(reject);
    });
  }

  iconImageURL() {
    if (!this.data) {
      return new Promise(async (resolve, reject) => {
        await this.getItemData();
        resolve(
          `${this.#ddragonAPI}/${this.apiVersion}/img/item/${
            this.data.image.full
          }.png`
        );
      });
    }
    return `${this.#ddragonAPI}/${this.apiVersion}/img/item/${this.id}.png`;
  }

  async getItemData(): Promise<ItemAPIType> {
    return new Promise(async (resolve, reject) => {
      const items = await Item.getAll({
        apiVersion: this.apiVersion,
        lang: this.lang,
      });
      const item = items.find((x) => x.name == this.name || x.id == this.id);
      if (!item) {
        reject("Item not found");
      }
      this.data = item;
      resolve(item);
    });
  }
}

export default Item;
