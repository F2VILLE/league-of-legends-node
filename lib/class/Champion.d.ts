import Langs from "../types/Langs";
import ChampionOptions from "../types/ChampionOptions";
import ChampionData from "../types/ChampionData";
declare class Champion {
    #private;
    id: string;
    apiVersion: string;
    lang?: Langs;
    data: ChampionData;
    constructor(options: ChampionOptions);
    static getAll(params: {
        apiVersion: string;
        lang: Langs;
    }): Promise<unknown>;
    splashImageURL(): string;
    iconImageURL(): string;
    loadingImageURL(): string;
    getSpell(key: "Q" | "W" | "E" | "R"): {
        id: string;
        name: string;
        description: string;
        tooltip: string;
        leveltip: {
            label: string[];
            effect: string[];
        };
        maxrank: number;
        cooldown: number[];
        cooldownBurn: string;
        cost: number[];
        costBurn: string;
        datavalues: {};
        effect: number[];
        effectBurn: string[];
        costType: string;
        maxammo: string;
        range: number[];
        rangeBurn: string;
        image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
            url?: string;
        };
        resource: string;
    };
    getChampionDatas(): Promise<ChampionData>;
}
export default Champion;
