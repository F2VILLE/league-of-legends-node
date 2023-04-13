import axios from 'axios';
import RiotUserOptions from '@Types/RiotUserOptions';
import Champions from '@Types/Champions';
import ChampionDatas from '@Types/ChampionDatas';
import Summoner from '@Types/Summoner';
import Champion from './Champion';
import Langs from '@Types/Langs';
import Servers from '@Types/Servers';

class RiotUser {
    username: string;
    summonerID: string;
    apiVersion: string;
    lang: Langs;
    apiKey: string;
    server: Servers;
    #riotAPI: string;
    /**
     * 
     * @param username Name of the target account
     * @param apiVersion Version of API (Use the API constructor to get API version)
     * @param lang Language code (Ex: "en_US")
     */
    constructor(options: RiotUserOptions) {
        this.username = options.username
        this.apiVersion = options.apiVersion
        this.apiKey = options.apiKey
        this.lang = options.lang || "en_US"
        this.server = options.server
        this.#riotAPI = `https://${this.server}.api.riotgames.com/lol`
        this.getSummonerID()
    }


    /**
     * 
     * @param championName Name of the champion (Case sensitive !)
     */
    async getMastery(championName: Champions) {
        const champion = new Champion({
            championName,
            apiVersion: this.apiVersion,
            lang: this.lang
        })
        return new Promise((resolve, reject) => {
            champion.getChampionDatas().then((data: ChampionDatas) => {
                axios.get(`${this.#riotAPI}/champion-mastery/v4/champion-masteries/by-summoner/${this.summonerID}/by-champion/${data.key}`,
                    {
                        headers: {
                            "X-Riot-Token": this.apiKey
                        }
                    }).then(r => {
                        resolve({
                            name: championName,
                            championLevel: r.data.championLevel,
                            championPoints: r.data.championPoints,
                        })
                    }).catch(e => {
                        if (e.response.status === 404) {
                            reject("This user has no mastery on this champion")
                        }
                        else {
                            reject(e)
                        }
                    })
            }).catch(reject)
        })

    }

    /**
     * 
     * @returns Encrypted Summoner ID (view https://developer.riotgames.com)
     */
    async getSummonerID(): Promise<String> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.#riotAPI}/summoner/v4/summoners/by-name/${this.username}`, {
                headers: {
                    "X-Riot-Token": this.apiKey
                }
            }).then(r => {
                this.summonerID = r.data.id
                resolve(r.data.id)
            }).catch(reject)
        })
    }

    async getSummonerDatas(): Promise<Summoner> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.#riotAPI}/summoner/v4/summoners/by-name/${this.username}`, {
                headers: {
                    "X-Riot-Token": this.apiKey
                }
            }).then((r) => {
                resolve(r.data)
            }).catch(reject)
        })
    }
}

export default RiotUser;