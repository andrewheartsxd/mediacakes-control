const fs = require('fs');

function writeConfig(contentObject) {
  let filePath = 'config.json';
  let fileContent = JSON.stringify(contentObject);
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File ' + filePath + ' successfully created');
    }
  });
}

//function writeConfig1(contentObject) {
  //console.log('test1');
  //return new Promise(function (resolve, reject) {
    //let fileContent = JSON.stringify(contentObject);
    //let filePath = 'config.json';
    //console.log('test2');
    //fs.writeFile(filePath, fileContent, (err) => {
      //if (err) {
        //reject(err);
      //} else {
        //console.log('hi!');
        //resolve(console.log('File ' + filePath + ' successfully created'));
      //}
    //});
  //});
//}

module.exports = writeConfig;
