var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require("multer");

var routes = require('./routes/index');

var app = express();
var router = express.Router();

app.use(multer({
  dest: './tmp/',
  limits: {
    files: 1,
    fields: 15,
    fieldSize: 42000000,
    fileSize: 42000000
  },
  includeEmptyFields: true,
  onError: function (error, next) {
    console.log(error)
    next(error)
  }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.all('/:mdl/:acc', routes);
app.use('/', router);

// Manejador de error 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Manejador de errores en modo desarollo
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// Manejador de errores en modo produccion
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
