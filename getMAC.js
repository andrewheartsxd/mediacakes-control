const arp = require('node-arp');

function getMAC(configObject) {
  let ip = configObject.ip;
  return new Promise(function (resolve, reject) {
    arp.getMAC(ip, function (err, mac) {
      if (err) {
        console.log('error', err);
        reject(err);
      } else {
        configObject.mac = mac;
        console.log('configObject', configObject);
        resolve(configObject);
      }
    });
  });
}

module.exports = getMAC;
