import Champions from "./Champions";
declare type ChampionDatas = {
    "id": string;
    "key": string;
    "name": Champions;
    "title": string;
    "image": {
        "full": string;
        "sprite": string;
        "group": string;
        "x": number;
        "y": number;
        "w": number;
        "h": number;
    };
};
export default ChampionDatas;
