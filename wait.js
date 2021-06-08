const sleep = require('sleep');


exports.getSleep = () => {
  sleep.sleep(2)
  return 'time to wake up!'
}