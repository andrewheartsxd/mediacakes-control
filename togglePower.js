function togglePower(tv, next) {
  tv.control.power.toggle();
  console.log('Toggling power!');
  next(tv);
}

module.exports = togglePower;
