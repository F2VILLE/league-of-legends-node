import {API, Champion} from './lib/index'

const api = new API()

api.getVersion().then(async () => {
    const noctourne = new Champion({
        apiVersion: api.version,
        championName: "Nocturne",
        lang: "en_US"
    })

    await noctourne.getChampionDatas()
    const keys = ["Q", "W", "E", "R"]
    for (const key of keys) {
        console.log(key, ":", noctourne.getSpell(key as "Q" | "W" | "E" | "R").name)
    }

})