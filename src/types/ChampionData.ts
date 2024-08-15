type ChampionData = {
  id: string;
  key: string;
  name: string;
  title: string;
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
  skins: Array<{
    id: string;
    num: number;
    name: string;
    chromas: false;
  }>;
  lore: string;
  blurb: string;
  allytips: Array<string>;
  enemytips: Array<string>;
  tags: Array<string>;
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
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
  spells: Array<{
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
      label: Array<string>;
      effect: Array<string>;
    };
    maxrank: number;
    cooldown: Array<number>;
    cooldownBurn: string;
    cost: Array<number>;
    costBurn: string;
    datavalues: {};
    effect: Array<number | null>;
    effectBurn: Array<string | null>;
    costType: string;
    maxammo: string;
    range: Array<number>;
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
  }>;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
};


export default ChampionData;