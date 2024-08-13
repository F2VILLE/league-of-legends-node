import {API, Item} from './lib/index'

const api = new API()

api.getVersion().then(() => {
    new Item({id: "223073", apiVersion: api.version}).getItemData().then(console.log)
    new Item({name: "Stridebreaker", apiVersion: api.version}).getItemData().then(console.log)
})