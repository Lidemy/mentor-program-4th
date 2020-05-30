const request = require('request');

const CLIENT_ID = 's44s145uexjgeu9mqqa1s93oc1bnli';
const BASE_URL = 'https://api.twitch.tv/kraken';


request({
  method: 'GET',
  url: `${BASE_URL}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}, function(err, res, body) {
  if (err) {
    return console.log(err)
  }

  const data = JSON.parse(body)
  const games = data.top
  for(let game of games) {
    console.log(game.viewers + ' ' + game.game.name)
  }
})
