'use strict';
module.exports = function (grunt) {

  // Detects the environment flag
  var env = process.env.ENV || 'development';

  // Loads the correct environment configuration file.
  var config = require('../envs/' + env + '.json');

  return {

    'environment': {
      options: {
        data: {
          "api": config.api,
          "port": config.port,
          "elasticSearchConf": {
            "host" : config.elasticSearchConf.host,
            "port" : config.elasticSearchConf.port,
            "timeout": config.elasticSearchConf.timeout,
            "querySize": config.elasticSearchConf.querySize
          },
          "idle": {
            "max": config.idle.max,
            "timeout": config.idle.timeout
          },
          "ping": {
            "interval": config.ping.interval,
            "logout": config.ping.logout
          }
        },
        delimeters: 'handlebars-like-delimiters'
      },
      files: {
        './frontend/app/app.environment.js': ['./envs/app.environment.tpl']
      }
    }

  };

};