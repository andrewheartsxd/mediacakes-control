const fs = require('fs');

module.exports = function () {
  let fileContent = JSON.stringify({
    beepBoop: 123
  });

  let filePath = 'config.js';

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('File ' + filePath + ' successfully created');
  });
};


