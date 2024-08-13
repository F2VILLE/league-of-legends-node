// @ts-nocheck
import Champions from "./Champions"

type ChampionDatas = {
    "id": string,
    "key": string,
    "name": Champions,
    "title": string,
    "image": {
      "full": string,
      "sprite": string,
      "group": string,
      "x": number,
      "y": number,
      "w": number,
      "h": number
    },
    "skins": SkinObject[],
    "lore": string,
    "blurb": string,
    "allytips": [
      "Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy.",
      "Crowd Control abilities like Infernal Chains or your allies' immobilizing effects will help you set up The Darkin Blade.",
      "Cast World Ender when you are sure you can force a fight."
    ],
    "enemytips": [
      "Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones.",
      "Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox.",
      "Keep your distance when Aatrox uses his Ultimate to prevent him from reviving."
    ],
    "tags": [
      "Fighter",
      "Tank"
    ],
    "partype": string,
    "info": {
      "attack": number,
      "defense": number,
      "magic": number,
      "difficulty": number
    },
    "stats": {
      "hp": number,
      "hpperlevel": number,
      "mp": number,
      "mpperlevel": number,
      "movespeed": number,
      "armor": number,
      "armorperlevel": number,
      "spellblock": number,
      "spellblockperlevel": number,
      "attackrange": number,
      "hpregen": number,
      "hpregenperlevel": number,
      "mpregen": number,
      "mpregenperlevel": number,
      "crit": number,
      "critperlevel": number,
      "attackdamage": number,
      "attackdamageperlevel": number,
      "attackspeedperlevel": number,
      "attackspeed": number
    },
    "spells": [
      {
        "id": string,
        "name": string,
        "description": string,
        "tooltip": string,
        "leveltip": {
          "label": any[],
          "effect": any[],
        },
        "maxrank": number,
        "cooldown": [
          number,
          number,
          number,
          number,
          number
        ],
        "cooldownBurn": string,
        "cost": [
          number,
          number,
          number,
          number,
          number
        ],
        "costBurn": string,
        "datavalues": {},
        "effect": [
          null,
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ]
        ],
        "effectBurn": any[],
        "vars": any[],
        "costType": string,
        "maxammo": string,
        "range": any[],
        "rangeBurn": string,
        "image": {
          "full": string,
          "sprite": string,
          "group": string,
          "x": number,
          "y": number,
          "w": number,
          "h": number
        },
        "resource": string
      },
      {
        "id": string,
        "name": string,
        "description": string,
        "tooltip": string,
        "leveltip": {
          "label": [
            "Cooldown",
            "Damage",
            "Slow"
          ],
          "effect": [
            "{{ cooldown }} -> {{ cooldownNL }}",
            "{{ wbasedamage }} -> {{ wbasedamageNL }}",
            "{{ wslowpercentage*-number.number }}% -> {{ wslowpercentagenl*-number.number }}%"
          ]
        },
        "maxrank": number,
        "cooldown": [
          number,
          number,
          number,
          number,
          number
        ],
        "cooldownBurn": string,
        "cost": [
          number,
          number,
          number,
          number,
          number
        ],
        "costBurn": string,
        "datavalues": {},
        "effect": [
          null,
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ]
        ],
        "effectBurn": [
          null,
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number"
        ],
        "vars": any[],
        "costType": string,
        "maxammo": string,
        "range": [
          number,
          number,
          number,
          number,
          number
        ],
        "rangeBurn": string,
        "image": {
          "full": string,
          "sprite": string,
          "group": string,
          "x": number,
          "y": number,
          "w": number,
          "h": number
        },
        "resource": string
      },
      {
        "id": string,
        "name": string,
        "description": string,
        "tooltip": string,
        "leveltip": {
          "label": [
            "Cooldown",
            "Healing %",
            "Healing % during World Ender"
          ],
          "effect": [
            "{{ cooldown }} -> {{ cooldownNL }}",
            "{{ espellvamp }}% -> {{ espellvampNL }}%",
            "{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%"
          ]
        },
        "maxrank": number,
        "cooldown": [
          number,
          number,
          number,
          number,
          number
        ],
        "cooldownBurn": string,
        "cost": [
          number,
          number,
          number,
          number,
          number
        ],
        "costBurn": string,
        "datavalues": {},
        "effect": [
          null,
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ],
          [
            number,
            number,
            number,
            number,
            number
          ]
        ],
        "effectBurn": [
          null,
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number"
        ],
        "vars": any[],
        "costType": string,
        "maxammo": string,
        "range": [
          number,
          number,
          number,
          number,
          number
        ],
        "rangeBurn": string,
        "image": {
          "full": string,
          "sprite": string,
          "group": string,
          "x": number,
          "y": number,
          "w": number,
          "h": number
        },
        "resource": string
      },
      {
        "id": string,
        "name": string,
        "description": string,
        "tooltip": string,
        "leveltip": {
          "label": [
            "Total Attack Damage Increase",
            "Healing Increase",
            "Move Speed",
            "Cooldown"
          ],
          "effect": [
            "{{ rtotaladamp*number.number }}% -> {{ rtotaladampnl*number.number }}%",
            "{{ rhealingamp*number.number }}% -> {{ rhealingampnl*number.number }}%",
            "{{ rmovementspeedbonus*number.number }}% -> {{ rmovementspeedbonusnl*number.number }}%",
            "{{ cooldown }} -> {{ cooldownNL }}"
          ]
        },
        "maxrank": number,
        "cooldown": [
          number,
          number,
          number
        ],
        "cooldownBurn": string,
        "cost": [
          number,
          number,
          number
        ],
        "costBurn": string,
        "datavalues": {},
        "effect": [
          null,
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ],
          [
            number,
            number,
            number
          ]
        ],
        "effectBurn": [
          null,
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number"
        ],
        "vars": any[],
        "costType": string,
        "maxammo": string,
        "range": [
          number,
          number,
          number
        ],
        "rangeBurn": string,
        "image": {
          "full": string,
          "sprite": string,
          "group": string,
          "x": number,
          "y": number,
          "w": number,
          "h": number
        },
        "resource": string
      }
    ],
    "passive": {
      "name": string,
      "description": string,
      "image": {
        "full": string,
        "sprite": string,
        "group": string,
        "x": number,
        "y": number,
        "w": number,
        "h": number
      }
    },
    "recommended": any[]
  }
