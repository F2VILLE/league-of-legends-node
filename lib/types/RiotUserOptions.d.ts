import Langs from "./Langs";
import Servers from "./Servers";
declare type RiotUserOptions = {
    username: string;
    apiVersion: string;
    lang?: Langs;
    apiKey: string;
    server: Servers;
};
export default RiotUserOptions;
