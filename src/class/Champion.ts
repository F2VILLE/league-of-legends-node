import Langs from "../types/Langs";
import ChampionOptions from "../types/ChampionOptions";
import axios from "axios";
import ChampionsAPIDatas from "../types/ChampionsAPIDatas";
import ChampionData from "../types/ChampionData";

class Champion {
  id: string;
  apiVersion: string;
  #ddragonAPI: string;
  lang?: Langs;
  data: ChampionData;
  constructor(options: ChampionOptions) {
    this.id = options.championName;
    this.apiVersion = options.apiVersion;
    this.lang = options.lang || "en_US";
    this.#ddragonAPI = `http://ddragon.leagueoflegends.com/cdn`;
  }

  static async getAll(params: { apiVersion: string; lang: Langs }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/data/${params.lang}/champion.json`
        )
        .then((res) => {
          const r = res.data;
          const champions: ChampionsAPIDatas[] = Object.values(r.data).map(
            (x: ChampionsAPIDatas) => {
              x.image.url = `http://ddragon.leagueoflegends.com/cdn/${params.apiVersion}/img/champion/${x.image.full}`;
              return x;
            }
          ) as ChampionsAPIDatas[];
          resolve(champions);
        })
        .catch(reject);
    });
  }

  splashImageURL() {
    return `${this.#ddragonAPI}/img/champion/splash/${this.id}_0.jpg`;
  }

  iconImageURL() {
    return `${this.#ddragonAPI}/${this.apiVersion}/img/champion/${this.id}.png`;
  }

  loadingImageURL() {
    return `${this.#ddragonAPI}/img/champion/loading/${this.id}_0.jpg`;
  }

  getSpell(key: "Q" | "W" | "E" | "R") {
    const keys = ["Q", "W", "E", "R"];
    return this.data.spells[keys.indexOf(key)];
  }

  getChampionDatas(): Promise<ChampionData> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${this.#ddragonAPI}/${this.apiVersion}/data/${this.lang}/champion/${
            this.id
          }.json`
        )
        .then((res) => {
          const r = res.data as { data: { [key: string]: ChampionData } };
          this.data = r.data[this.id] as ChampionData;
          this.data.image.url = `${this.#ddragonAPI}/${this.apiVersion}/img/champion/${this.data.image.full}`;
          for (const spell of this.data.spells) {
            spell.image.url = `${this.#ddragonAPI}/${this.apiVersion}/img/spell/${spell.id}.png`;
          }
          resolve(r.data[this.id]);
        })
        .catch(reject);
    });
  }
}

export default Champion;
