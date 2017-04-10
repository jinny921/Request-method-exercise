const request = require('request');
const fs = require('fs');

console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1

       .on('error', function (err) {                                   // Note 2
          throw err;
       })
       .on('response', function (response) {                           // Note 3
          console.log(`Response Status Code: ${response.statusCode}\nResponse Status Message: ${response.statusMessage}\nResponse Content Type: ${response.headers['content-type']}`);
       })
       .on('end', function (complete) {
          console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
