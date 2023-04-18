import RiotUserOptions from '../types/RiotUserOptions';
import Champions from '../types/Champions';
import Summoner from '../types/Summoner';
import Langs from '../types/Langs';
import Servers from '../types/Servers';
declare class RiotUser {
    #private;
    username: string;
    summonerID: string;
    apiVersion: string;
    lang: Langs;
    apiKey: string;
    server: Servers;
    /**
     *
     * @param username Name of the target account
     * @param apiVersion Version of API (Use the API constructor to get API version)
     * @param lang Language code (Ex: "en_US")
     */
    constructor(options: RiotUserOptions);
    /**
     *
     * @param championName Name of the champion (Case sensitive !)
     */
    getMastery(championName: Champions): Promise<unknown>;
    /**
     *
     * @returns Encrypted Summoner ID (view https://developer.riotgames.com)
     */
    getSummonerID(): Promise<String>;
    getSummonerDatas(): Promise<Summoner>;
}
export default RiotUser;
