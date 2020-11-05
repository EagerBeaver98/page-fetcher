const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const fileNameAndLocation = process.argv[3];


const fileWrite = (htmlContent) => {
  fs.writeFile(fileNameAndLocation, htmlContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Downloaded and saved ${htmlContent.length} bytes to ${fileNameAndLocation}`);
    }
  });
};
request(url, (error, response, urlContent) => {
  fileWrite(urlContent);
});

