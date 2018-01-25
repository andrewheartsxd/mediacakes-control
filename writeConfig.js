const fs = require('fs');

module.exports = function (contentObject) {
  let fileContent = JSON.stringify(contentObject);
  let filePath = 'config.json';

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('File ' + filePath + ' successfully created');
  });
};


