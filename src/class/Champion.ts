import ChampionOptions from "../types/ChampionOptions";
import axios from "axios";

type ChampionAPIType = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
};

class Champion {
  id: string;
  apiVersion: string;
  #ddragonAPI: string;
  lang: string;
  constructor(options: ChampionOptions) {
    this.id = options.championName;
    this.apiVersion = options.apiVersion;
    this.lang = options.lang || "en_US";
    this.#ddragonAPI = `http://ddragon.leagueoflegends.com/cdn`;
  }

  static async getAll(apiVersion: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/en_US/champion.json`
        )
        .then((res) => {
          const r = res.data;
          const champions: ChampionAPIType[] = Object.values(r.data).map(
            (x) => x
          ) as ChampionAPIType[];
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

  getChampionDatas() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${this.#ddragonAPI}/${this.apiVersion}/data/${this.lang}/champion/${
            this.id
          }.json`
        )
        .then((res) => {
          const r = res.data;
          resolve(r.data[this.id]);
        })
        .catch(reject);
    });
  }
}

export default Champion;
