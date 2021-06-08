const cool = require('cool-ascii-faces');
// const sleep = require('sleep');
// const wait = require('./wait');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5001;

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
  .get('/wait', (req, res) => res.send(demo1()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo1() {
  let res
  console.log('Taking a break...');
  // await sleep(2000);
  for (let i = 1; i < 30000000; i++) {
    res = 'cycle ' + i
  }

  return res
}