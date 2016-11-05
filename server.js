var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack.config');

var app = express();
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname +'/public'));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app


