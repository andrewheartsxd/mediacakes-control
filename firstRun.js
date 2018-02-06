const arp = require('node-arp');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const writeConfig = require('./writeConfig.js');

function getMAC(ip) {
  return new Promise(function (resolve, reject) {
    arp.getMAC(ip, function (err, mac) {
      if (err) {
        reject(err);
      } else {
        resolve(mac)
      }
    });
  });
}

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
          console.log('Auth token: ' + authToken);
        }).then(function () {
          console.log('hi!');
        });
        //.then(writeConfig({ ip: ip, authToken: authToken, macAddress: macAddress}));
          // write config file
        rl.close();
        console.log('Run app.js again to toggle power');
      });
    });
  }, (err) => {
    console.log('error discovering device:', err);
  });
}

module.exports = firstRun;
