const cool = require('cool-ascii-faces');
const sleep = require('./wait');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/wait', (req, res) => res.send(sleep.getSleep()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));