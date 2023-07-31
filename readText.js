const fs = require('fs');

fs.readFile('./data.txt', (err, data) => {
  if (err) {
    return console.log('error');
  }
  console.log(data.toString().length);
});
