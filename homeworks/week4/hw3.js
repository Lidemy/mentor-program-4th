let request = require('request');
let baseUrl = 'https://restcountries.eu/rest/v2/name/';
let process = require('process')
let name = process.argv[2]

request(
  {
    method:'GET',
    url: `${baseUrl}${name}`,
  },
  (error, response, body) => {
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
    
    for(let i = 0;i < data.length;i++){
      console.log(`============`) 
      console.log(`國家:${data[i].name}`)
      console.log(`首都:${data[i].capital}`) 
      console.log(`貨幣:${data[i].currencies[0].code}`)
      console.log(`國碼:${data[i].callingCodes[0]}`)
    }
  }
)






/*
let request = require('request');
let baseUrl = 'https://restcountries.eu/rest/v2/name/';
let process = require('process')
let name = process.argv[2]


request(
  {
  	method:'GET',
  	url: `${baseUrl}${name}`,
  },
  (error, response, body) => {
    for (let i=0;i<3;i++ ) {
      let data = JSON.parse(body)
    console.log('============')
    console.log(`國家: ${data[i].name}`)
    console.log(`首都: ${data[i].capital}`)
    console.log(`貨幣: ${data[i].currencies[0].code}`)
    console.log(`國碼: ${data[i].callingCodes[0]}`)
    }
    
  }
)
*/