import {API, Champion} from './lib/index'

const api = new API()

api.getVersion().then(() => {
    const champion = new Champion({
        apiVersion: api.version,
        championName: "Aatrox",
        lang: "fr_FR"
    })

    champion.getChampionDatas().then(console.log).catch(console.error)
})