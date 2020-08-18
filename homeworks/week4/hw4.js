let request = require('request');
let baseUrl = 'https://api.twitch.tv/kraken/games/top';
let userId = 't1i56f8yeobnh6vqwymu1jo3tkhtlp';//通關身分
let num = 21;

request(
  {
  	method:'GET',
  	url:`${baseUrl}?limit=${num}`,//?key=value
  	headers:{
  		'Client-ID':userId,//通關身分
  		Authorization:'Bearer cfabdegwdoklmawdzdo98xt2fo512y',//通關行證
  		Accept:'application/vnd.twitchtv.v5+json',//Accept+資料格式
  	},
  },
  (error,response,body) => {
  	if(response.statusCode < 200 || response.statusCode >= 400){
  		console.log('找不到資訊');
      	return;
  	}
  	if(error){
  		console.log('查詢失敗');
      	return;
  	}
  	let data;
  	try{
  	  data = JSON.parse(body);
  	} catch(error){
  	  console.log('查詢失敗');
      return;
  	}
  	//console.log(body)
  	for(let i = 0;i < data.top.length;i++){
	//console.log(data.top[0].viewers)  
	//console.log(data.top[0].game.name)
	  console.log(`${data.top[i].viewers} ${data.top[i].game.name}`);
  	}
  }
)