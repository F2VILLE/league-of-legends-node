import ChampionOptions from '@Types/ChampionOptions';
import axios from 'axios';

class Champion {
    id: string;
    apiVersion: string;
    #ddragonAPI: string;
    lang: string;
    constructor(options: ChampionOptions) {
        this.id = options.championName;
        this.apiVersion = options.apiVersion;
        this.lang = options.lang || "en_US"
        this.#ddragonAPI = `http://ddragon.leagueoflegends.com/cdn`
    }

    splashImageURL() { return `${this.#ddragonAPI}/img/champion/splash/${this.id}_0.jpg` }

    iconImageURL() { return `${this.#ddragonAPI}/${this.apiVersion}/img/champion/${this.id}.png` }

    loadingImageURL() { return `${this.#ddragonAPI}/img/champion/loading/${this.id}_0.jpg` }

    getChampionDatas() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.#ddragonAPI}/${this.apiVersion}/data/${this.lang}/champion/${this.id}.json`).then(res => {
                const r = res.data
                resolve(r.data[this.id])
            }).catch(reject)
        })
    }

}

export default Champion;