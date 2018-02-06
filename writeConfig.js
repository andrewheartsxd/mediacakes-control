const fs = require('fs');

function writeConfig(contentObject) {
  return new Promise(function (resolve, reject) {
    let fileContent = JSON.stringify(contentObject);
    let filePath = 'config.json';
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        reject();
      } else {
        console.log('File ' + filePath + ' successfully created');
        resolve();
      }
    });
  });
}

module.exports = writeConfig;
