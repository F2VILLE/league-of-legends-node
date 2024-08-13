type ItemOptions = {
    name?: string;
    id?: string;
    apiVersion: string;
    lang?: string;
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
declare class Item {
    #private;
    id: string;
    name: string;
    apiVersion: string;
    lang: string;
    data: ItemAPIType;
    constructor(options: ItemOptions);
    static getAll(apiVersion: string): Promise<ItemAPIType[]>;
    iconImageURL(): string | Promise<unknown>;
    getItemData(): Promise<ItemAPIType>;
}
export default Item;
