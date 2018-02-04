function togglePower(tv) {
  tv.control.power.toggle();
  console.log('Toggling power!');
}

module.exports = togglePower;
