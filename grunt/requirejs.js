module.exports = {

  dist: {
    options: {
      baseUrl: 'public',
      mainConfigFile: 'public/start.js',
      findNestedDependencies: true,
      out: '.tmp/amd-modules.js',
      optimize: 'uglify',
      name: 'app-bootstrap',
      useStrict: true,
      wrap: false,
      preserveLicenseComments: false, //must be false when generating sourcemaps
      wrapShim: true,
      logLevel: 0
    }
  }

};
