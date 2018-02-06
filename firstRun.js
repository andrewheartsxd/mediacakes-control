const getMAC = require('./getMAC.js');
const writeConfig = require('./writeConfig.js');

function firstRun(smartcast) {
  // discover smartcast device
  const discoverDevice = require('./discoverDevice.js');
  discoverDevice(smartcast).then((device) => {
    if (device) {
      let ip = device.ip;
      let tv = new smartcast(ip);
      const pairDevice = require('./pairDevice.js');
      pairDevice(tv, ip);
    }
  }, (err) => {
    console.log("couldn't discover device");
  });
}


module.exports = firstRun;
