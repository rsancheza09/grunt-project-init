'use strict';
module.exports = function (grunt) {

  return {

    client: {
      src: 'frontend/app/**/*.js',
      options: {
        specs: [
          'test/client/services/*Spec.js'
        ],
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfigFile: 'frontend/start.js',
          requireConfig: {
            paths: {
              'ngMock': './bower_components/angular-mocks/angular-mocks'
            },
            shim: {
              'ngMock': {
                deps: ['angular']
              }
            },
            baseUrl: 'frontend'
          }
        }
      }
    }

  };

};