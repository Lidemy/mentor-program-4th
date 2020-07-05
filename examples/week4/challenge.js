/*
  這一題的重點是，與其把所有東西都用原生的 https 來改寫
  不如只改寫 request 這個 function，這樣剩下的都不用改
  超級方便XD
*/

// 用原生套件寫一個陽春版的 request 套件
const https = require('https');
function request(url, callback) {
  sendRequest(url, {
    method: 'GET'
  }, callback);
}

request.delete = function(url, callback) {
  sendRequest(url, {
    method: 'DELETE'
  }, callback);
}

request.post = function({ url, form }, callback) {
  sendRequest(url, {
    method: 'POST',
    data: form,
  }, callback);
}

request.patch = function({ url, form }, callback) {
  sendRequest(url, {
    method: 'PATCH',
    data: form,
  }, callback)
}

// 附註：這個方法目前對於 POST 跟 PATCH 只支援 json 格式的輸入
// 其他格式（例如說 application/x-www-form-urlencoded）不支援XD
function sendRequest(url, {
  method,
  data
}, callback) {
  const options = {
    method,
  };

  if (data) {
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  https.request(url, options, res => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      callback(null, res, body);
    });
    res.on('err', err => {
      callback(err, res, body);
    })
  })
  .end(data && JSON.stringify(data));
}

// 底下這邊的程式碼完全沒變，跟原本的 hw2.js 一模一樣
const args = process.argv;
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const params = args[3];

switch(action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, args[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}

function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  })
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    console.log(data)
  })
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err);
    }
    console.log('刪除成功！');
  })
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err);
    }
    console.log('新增成功！');
  })
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err);
    }
    console.log('更新成功！');
  })
}