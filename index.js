const wol = require('wol');

let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let smartcast = require('vizio-smart-cast');
//smartcast.discover((device) => {
  //console.log('Found: ', device);


  //wol.wake('', function (err, res) {
    //if (err) {
      //console.log('err:', err);
    //} else {
      //tv.control.power.toggle();
    //}
  //});


  //tv.pairing.initiate().then((respnse) => {
    //rl.question('Enter PIN:', (answer) => {
      //tv.pairing.pair(answer).then((response) => {
        //console.log(response.ITEM.AUTH_TOKEN);
      //});

      //rl.close();
    //});
  //});

//});
