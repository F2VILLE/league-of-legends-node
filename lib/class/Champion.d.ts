import ChampionOptions from '../types/ChampionOptions';
declare class Champion {
    #private;
    id: string;
    apiVersion: string;
    lang: string;
    constructor(options: ChampionOptions);
    splashImageURL(): string;
    iconImageURL(): string;
    loadingImageURL(): string;
    getChampionDatas(): Promise<unknown>;
}
export default Champion;
