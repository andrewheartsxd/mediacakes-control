module.exports = function discoverDevice(smartcast) {
  return new Promise(function (resolve, reject) {
    smartcast.discover((device) => {
      console.log('Found: ', device);
      resolve(device);
    }, (err) => {
      console.log('error discovering device:', err);
      reject();
    });
  });
};
