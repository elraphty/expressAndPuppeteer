const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const path = require('path');

// Load env values
require('dotenv').config()

const PORT = process.env.PORT;

// ROUTE FILES

const indexRoutes = require('./routes/index');

const app = express();

// Routes declaration 
app.use('/', indexRoutes);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set public path
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'ejs');


// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   // await page.setViewport({width: 1000, height: 500});
//   await page.goto('http://tssdevs.com');
//   await page.screenshot({path: 'example.png'});


//   // let html = await page.content();

//   await browser.close();
// })();

app.listen(PORT, () => {
  console.log('\x1b[33m%s\x1b[0m', `listening of port ${PORT}`)
});