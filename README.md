
#  League of Legends for Node

  

This is a TypeScript module to get informations about League of Legends users Mastery and Champions.
Feel free to hit me up on Discord to suggest any modification or if you got a question : [F2Ville#3733](discord.com/users/836685191812218970)
  
##  Usage

  

This modules works using classes. There's 3 classes :

- API

- RiotUser

- Champion

  

###  API
The API class is used to get the API Version, which is required to get datas about Users and Mastery.
```js
import {API} from  'league-of-legends-node'
const  api = new  API()
api.getVersion().then((version) => {
	// Code here
	// Note : You can get the version from the callback or directly from the class using api.version
	// /!\ You need to use the "getVersion" method before using api.version
})
```

### RiotUser
The RiotUser class is used to get User datas and mastery.
```js
const  riotUser = new  RiotUser({
	apiVersion: api.version,
	apiKey: APIKEY,
	server: "euw1",
	username: "F2Ville",
	lang: "en_GB"
})

riotUser.getMastery("Nocturne").then(mastery => {
	console.log(mastery) 
	/* returns { name: 'Nocturne', championLevel: 5, championPoints: 30981 } */
})

riotUser.getSummonerDatas().then(summonerDatas => {
	console.log(summonerDatas)
	/* returns {
		  id: string,
		  accountId: string,
		  puuid: string,
		  name: 'F2Ville',
		  profileIconId: 16,
		  revisionDate: 1681653120000,
		  summonerLevel: 29
		} */
})

riotUser.getSummonerID().then(summonerID=> {
	console.log(summonerID)
	/* returns summonerID */
})
```

### Champion
The Champion class is used to get datas about a Champion.
```js
const  champion = new  Champion({
	apiVersion: api.version,
	championName: "Aatrox",
	lang: "en_GB"
})

champion.getChampionDatas().then(championDatas => {
	console.log(championDatas) 
	/*
	returns an object with all datas about this champion.
	Please refer to https://developer.riotgames.com/docs/lol#data-dragon_champions
	*/
})

champion.iconImageURL() // returns the Icon URL

champion.loadingImageURL() // returns the Loading image URL

champion.splashImageURL() // returns the Splash Image URL
```