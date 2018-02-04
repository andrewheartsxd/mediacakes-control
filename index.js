const wol = require('wol');

const smartcast = require('vizio-smart-cast');

try {
  // if config file exists, use config file
  var config = require('./config.json');
} catch (ex) {
  // otherwise, run firstRun.js and create config file
  require('./firstRun.js')(smartcast);
} finally {
  //const togglePower = require('./togglePower.js');
  //togglePower(config);
}
