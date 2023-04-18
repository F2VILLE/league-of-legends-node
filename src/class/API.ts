import axios from 'axios';

class API {
    version: string;

    async getVersion() {
        return new Promise((resolve, reject) => {
            axios.get("https://ddragon.leagueoflegends.com/api/versions.json").then(r => {
                const res = r.data
                this.version = res[0]
                resolve(res[0])
            }).catch(reject)
        })
    }
}

export default API;