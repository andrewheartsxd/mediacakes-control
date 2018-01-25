let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let smartcast = require('vizio-smart-cast');

smartcast.discover((device) => {
  console.log('Found: ', device);
  //let ip = device.ip;
  let ip = '192.168.29.149';
  let tv = new smartcast(ip);

  tv.pairing.initiate().then((response) => {
    rl.question('Enter PIN:', (answer) => {
      tv.pairing.pair(answer).then((response) => {
        let authToken = response.ITEM.AUTH_TOKEN;
        console.log('Auth token: ' + authToken);
        const writeConfig = require('./writeConfig')({ ip: ip, authToken: authToken });
      });
      rl.close();
    });
  });
});
