const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = function pairDevice(tv, ip) {
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
};
