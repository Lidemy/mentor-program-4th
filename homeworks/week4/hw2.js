const request = require('request');
const baseUrl = 'https://lidemy-book-store.herokuapp.com';
const process = require('process')
let num = 20;

if(process.argv[2] === 'list'){
  list()
}else if(process.argv[2] === 'read'){
  read(process.argv[3])
}else if(process.argv[2] === 'delete'){
  delete_data(process.argv[3])
}else if(process.argv[2] === 'create'){
  create(process.argv[3])
}else if(process.argv[2]==='update'){
  update(process.argv[3],process.argv[4])
}

function responseCheck(err, code, body) {
  if (code < 200 || code >= 400) {
    return false
  }
  if (err) {
    return false
  }
  let data;
  try {
    data = JSON.parse(body)
  } catch(e) {
    console.log(e)
  }

  return data
}

function list(){
  request(
    {
      method : 'GET',
      url : `${baseUrl}/books?_limit=${num}`,
    },
    (error,response,body) => {
      let data = responseCheck(error, response.statusCode, body)
      if (data === false) {
        console.log('資料錯誤')
        return
      }
      for(let i = 0; i < num; i++){
        console.log(`${data[i].id} ${data[i].name}`)
      }
    }
  )
}

function read(id){
  request(
    {
      method : 'GET',
      url : `${baseUrl}/books/${id}`,
    },
    (error,response,body)=>{
      let data = responseCheck(error,response.statusCode,body)
      if(data === false){
        console.log('資料錯誤')
        return
      }
      console.log(`${data.id} ${data.name}`)
    }
  )
}

function delete_data(id){
  request(
    {
      method : 'DELETE',
      url : `${baseUrl}/books/${id}`,
    },
    (error,response,body)=>{
      let data = responseCheck(error,response.statusCode,body)
      if(data === false){
        console.log('資料錯誤')
        return
      }
      console.log(body)
    }
  )
}

function create(name){
  request(
    {
      method : 'POST',
      url : `${baseUrl}/books`,
      form: {
        name: name
      }
    },
    (error, response, body) => {
      let data = responseCheck(error,response.statusCode,body)
      if(data === false){
        console.log('資料錯誤')
        return
      }
      console.log(body)
    }
  )
}

function update(id,name){
request(
    {
      method : 'PATCH',
      url: `${baseUrl}/books/${id}`,
      form: {
        name: name
      }
    },
    (error, response, body) => {
      let data = responseCheck(error,response.statusCode,body)
      if(data === false){
        console.log('資料錯誤')
        return
      }
      console.log(body)
    }
  )
}
/*
let request = require('request');
let baseUrl = 'https://lidemy-book-store.herokuapp.com';
let process = require('process')
let num = 20;

if ( process.argv[2] === "list") {
  list()
} else if ( process.argv[2] === "read") {
  read(process.argv[3])
} else if ( process.argv[2] === "delete") {
  delete_data(process.argv[3])
} else if ( process.argv[2] === "create") {
  create(process.argv[3])
} else if ( process.argv[2] === "update") {
  update(process.argv[3],process.argv[4])
}

function list() {
  request(
    {
      method:'GET',
      url: `${baseUrl}/books?_limit=${num}`,
    },
    (error, response, body) => {
      let data = JSON.parse(body)
      for(let i=0;i<num;i++){
        console.log(`${data[i].id} ${data[i].name}`)
      }
    }
  )
}

function read(id) {
  request(
    {
      method:'GET',
      url: `${baseUrl}/books/${id}`,
    },
    (error, response, body) => {
      let data = JSON.parse(body)
      console.log(`${data.id} ${data.name}`)
    }
  )
}

function delete_data(id) {
  request(
    {
      method:'DELETE',
      url: `${baseUrl}/books/${id}`,
    },
    (error, response, body) => {
      console.log(body)
    }
  )
}

function create(str) {
  request(
    {
      method:'POST',
      url: `${baseUrl}/books`,
      form: {
        name: str
      }
    },
    (error, response, body) => {
      console.log(body)
    }
  )
}

function update(id,str) {
  request(
    {
      method:'PATCH',
      url: `${baseUrl}/books/${id}`,
      form: {
        name: str
      }
    },
    (error, response, body) => {
      console.log(body)
    }
  )
}
*/