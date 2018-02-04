const wol = require('wol');
const smartcast = require('vizio-smart-cast');
const togglePower = require('./togglePower.js');

try {
  // if config file exists, use config file to toggle power
  const config = require('./config.json');
  let tv = new smartcast(config.ip, config.authToken);
  togglePower(tv);
} catch (ex) {
  // otherwise, run firstRun.js and create config file, then toggle power
  console.log('First run, creating config file...');
  require('./firstRun.js')(smartcast);
}