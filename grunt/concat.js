module.exports = function(grunt) {

  // Detects the environment flag
  var env = process.env.ENV,
    src = [".tmp/amd-modules.js"],
    srcJqueryUI = ['./frontend/bower_components/jquery-ui/ui/minified/core.min.js',
      './frontend/bower_components/jquery-ui/ui/minified/widget.min.js',
      './frontend/bower_components/jquery-ui/ui/minified/position.min.js',
      './frontend/bower_components/jquery-ui/ui/minified/autocomplete.min.js',
      './frontend/bower_components/jquery-ui/ui/minified/menu.min.js',
      'public/assets/js/superglue.min.js'
    ];

  // This is needed when using superglue.min.js
  src.push("frontend/start.js");

  return {
    js: {
      src: src,
      dest: 'public/assets/js/superglue.min.js',
      nonull: true,
      options: {
        sourceMap: true
      }
    },
    jqueryUI: {
      src: srcJqueryUI,
      dest: 'public/assets/js/superglue.min.js',
      nonull: true,
      options: {
        sourceMap: true
      }
    }
  }
};
