let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
          // write config file
          const writeConfig = require('./writeConfig')({ ip: ip, authToken: authToken });
        });
        rl.close();
      });
    });
  });
}

module.exports = firstRun;

