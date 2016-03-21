module.exports = function (grunt) {

	// Grunt lib to measure time taken for each task
  require('time-grunt')(grunt);

  // Load tasks inside 'grunt' folder
  require('load-grunt-config')(grunt);

  // Stops API server when exiting watch task.
  process.on('SIGINT', function() {

    grunt.task.run(['exec:stop_api']);

  });

};
