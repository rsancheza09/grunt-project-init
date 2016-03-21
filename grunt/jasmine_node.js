'use strict';
module.exports = function (grunt) {
  return {
    api: {
      options: {
        specFolders: ['test/api'],
        forceExit: true,
        match: '.',
        verbose: true,
        matchall: false,
        extensions: 'js',
        specNameMatcher: '_spec',
        useRequireJs: false,
        jUnit: {
          report: true,
          savePath: "./test/reports/api/",
          useDotNotation: true,
          consolidate: true
        }
      }
    }
  };
};