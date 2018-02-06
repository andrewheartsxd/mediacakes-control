const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const getMAC = require('./getMAC.js');
const writeConfig = require('./writeConfig.js');

function firstRun(smartcast) {
  // discover smartcast device
  smartcast.discover((device) => {
    console.log('Found: ', device);
    let ip = device.ip;
    let tv = new smartcast(ip);

    // initiate pairing
    tv.pairing.initiate().then((response) => {
      rl.question('Enter PIN:', (answer) => {
        tv.pairing.pair(answer).then((response) => {
          let authToken = response.ITEM.AUTH_TOKEN;
          let configObject = { ip: ip, authToken: authToken };
          console.log('configObject', configObject);
          return configObject;
        })
          // get MAC address
          .then(getMAC)
          // write config file
          .then(writeConfig)
          .then(() => {
            console.log('Run app.js again to toggle power');
          });
        rl.close();
      });
    });
  }, (err) => {
    console.log('error discovering device:', err);
  });
}

module.exports = firstRun;
