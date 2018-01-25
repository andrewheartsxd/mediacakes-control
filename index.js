const wol = require('wol');

const smartcast = require('vizio-smart-cast');

try {
  const config = require('./config.json');
} catch (ex) {
  const firstRun = require('./firstRun.js')(smartcast);
}
