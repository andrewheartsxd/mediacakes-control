const wol = require('wol');
const smartcast = require('vizio-smart-cast');
const togglePower = require('./togglePower.js');
const switchInput = require('./switchInput.js');

process.on('unhandledRejection', (reason) => {
  console.log('Reason: ' + reason);
});

try {
  // if config file exists, use config file to toggle power
  const config = require('./config.json');
  let tv = new smartcast(config.ip, config.authToken);
  // send wake on lan
  wol.wake(config.mac, function (err, res) {
    if (err) {
      console.log('error sending wol:', err);
    } else {
      togglePower(tv, switchInput);
    }
  });
} catch (ex) {
  // otherwise, run firstRun.js and create config file
  console.log('First run, creating config file...');
  require('./firstRun.js')(smartcast);
}
