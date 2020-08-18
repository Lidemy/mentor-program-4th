const request = require('request');
const baseUrl = 'https://lidemy-book-store.herokuapp.com';
let num = 10;

request(
  {
  	method : 'GET',
  	url : `${baseUrl}/books?_limit=${num}`
  },
  (error,response,body) => {
  	if (response.statusCode < 200 || response.statusCode >= 400) {
      console.log('找不到資訊');
      return;
    }
    if (error) {
      console.log('查詢失敗');
      return;
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log('查詢失敗');
      return;
    }

  	for(let i = 0; i < num; i++){
	  console.log(`${data[i].id} ${data[i].name}`)
    }
  }  
)

/*
let request = require('request');
let baseUrl = 'https://lidemy-book-store.herokuapp.com';
let num = 10;

request(
  {
  	method:'GET',
  	url: `${baseUrl}/books?_limit=${num}`,
*/
/*
  	form: {
  	  name: "雞蛋吃了肚子痛"
  	}

*/
  
  /*

  },
  (error, response, body) => {
  	let data = JSON.parse(body)
  	for(let i=0;i<10;i++){
  		console.log(`${data[i].id} ${data[i].name}`)
  	}
  }
)
*/