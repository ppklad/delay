const cool = require('cool-ascii-faces');
const sleep = require('sleep');
// const wait = require('./wait');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const wait2s = () => { sleep.sleep(2); return 'ok' }

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  // .get('/wait', (req, res) => res.send(wait.getSleep()))
  // .get('/wait', (req, res) => res.send(wait2s()))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/wait', (req, res) => res.send(w()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

w = () => {
  let result = '';
  // const times = process.env.TIMES || 5;
  // for (i = 0; i < times; i++) {
  //   result += i + ' ';
  // }
  sleep.sleep(2)
  result = 'ok'
  return result;
}