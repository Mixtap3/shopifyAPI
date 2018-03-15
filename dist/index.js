'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: Connect to mongoose

// Init App
var app = (0, _express2.default)();

// JSON Body Parser
app.use(_bodyParser2.default.json());

// Home Route
app.get('/*', function (req, res) {
  res.json({
    message: "success"
  });
});

app.listen(3000, function () {
  return console.log('Running on port 3000...');
});