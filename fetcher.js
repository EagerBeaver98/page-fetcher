const fs = require('fs');
const request = require('request');
const host = process.argv;
const domain = host[2];

request(domain, (error, response, body) => {
  console.log('error', error);
  
  
});