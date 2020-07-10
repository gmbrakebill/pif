const express = require('express')
const app = express()
const path = require('path');
const port = 3001;

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

console.log(__dirname);
app.use('/', express.static(path.join(__dirname, '.')));
app.use('/', express.static(path.join(__dirname, '/static')));
app.use(express.static(path.join(__dirname, '/static/css')));
app.use(express.static(path.join(__dirname, '/static/js')));

app.listen(port, () => {
    console.log(`pif frontend running on port ${port}.`)
  })