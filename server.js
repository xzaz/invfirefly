'use strict';

const express = require('express');
const tesseract = require("node-tesseract-ocr");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("https://www.researchgate.net/profile/Diane-Schallert/publication/288057676/figure/fig1/AS:613969366622247@1523393112783/Figure-A2-Island-text-Neutral-version-English.png", config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })