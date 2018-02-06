const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const getMAC = require('./getMAC.js');
const writeConfig = require('./writeConfig.js');


function discoverDevice(smartcast) {
  return new Promise(function (resolve, reject) {
    smartcast.discover((device) => {
      console.log('Found: ', device);
      resolve(device);
    }, (err) => {
      console.log('error discovering device:', err);
      reject();
    });
  });
}

function firstRun(smartcast) {
  // discover smartcast device
  //const device = require('./discoverDevice.js')(smartcast);
  discoverDevice(smartcast).then((device) => {
    if (device) {
      let ip = device.ip;
      let tv = new smartcast(ip);
      pairDevice(tv, ip);
    }
  }, (err) => {
    console.log("couldn't discover device");
  });
}

function pairDevice(tv, ip) {
  // initiate pairing
  tv.pairing.initiate().then((response) => {
    rl.question('Enter PIN: ', (answer) => {
      tv.pairing.pair(answer).then((response) => {
        rl.close();
        let authToken = response.ITEM.AUTH_TOKEN;
        let configObject = { ip: ip, authToken: authToken };
        //console.log('configObject', configObject);
        return configObject;
      })
      // get MAC address
        .then(getMAC)
      // write config file
        .then(writeConfig)
        .then(() => {
          console.log('Run app.js again to toggle power');
        });
    });
  }, (err) => {
    console.log(err);
  });
}

module.exports = firstRun;
