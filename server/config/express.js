const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      methodOverride = require('method-override'),
      cors = require('cors');

module.exports = function(app, config) {

  app.use(logger('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(methodOverride('X-HTTP-Method-Override'));

  app.use(cors());

  if (process.env.NODE_ENV !== 'development') {
    app.use('/', express.static(config.rootPath + './dist'))
    // app.use('/', express.static(path.join(__dirname, './dist')));
  }

  if (process.env.NODE_ENV !== 'development') {
    app.get('*', function(req, res) {
      res.sendFile(config.rootPath + '/dist/index.html')
      // res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
  }

}
