import {config} from 'dotenv';
import RiotUser from '@Class/RiotUser';
import API from '@Class/API';
config()

const apiKey = process.env.RIOT_KEY;

const api = new API();

api.getVersion().then(async () => {
    console.log("API Version :", api.version)
    const riotUser = new RiotUser({
        apiVersion: api.version,
        lang: "fr_FR",
        username: "F2Ville",
        apiKey,
        server: "euw1"
    })
    await riotUser.getSummonerID().catch(console.error);
    console.log(`Summoner ID of ${riotUser.username} : ${riotUser.summonerID}`)
    await riotUser.getMastery("Nocturne").then(console.log).catch(console.error)
    await riotUser.getSummonerDatas().then(console.log).catch(console.error)
}).catch(console.error)
