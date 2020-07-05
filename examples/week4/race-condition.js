const request = require('request');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

request(`${API_ENDPOINT}/books/1`, (err, res, body) => {
  console.log('1', body);
});

request(`${API_ENDPOINT}/books/2`, (err, res, body) => {
  console.log('2', body);
});
