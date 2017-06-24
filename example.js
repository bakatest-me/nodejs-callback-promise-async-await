/* run onnode.js version 7.10 */

const axios = require('axios');//use package "npm i axios -S"
var instance = axios.create({
  baseURL: 'https://unsplash.it/'
});

function getData() {
  instance.get('/list').then(function (response) {
    console.log('main todo');
    console.log("response total %s <",response.data.length);
  })
  .catch(function (error) {
    console.log("if error");
  });
}

function main() {
  console.log('main work');
  getData();
  console.log("main end")
}

main();