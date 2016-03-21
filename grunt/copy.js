module.exports = {

  frontend: {
    files: [

      // Copies all files from the front end folder
      {
        cwd: 'frontend',
        expand: true,
        flatten: false,
        src: [
          '**/*'
        ],
        dest: 'public',
        filter: 'isFile'
      },

      // Copies map files from bower components before running requirejs task
      {
        expand: true,
        flatten: true,
        src: [
          'frontend/bower_components/**/*.min.js.map'
        ],
        dest: '.tmp',
        filter: 'isFile'
      },

      // Copies font files from UI-Grid bower components before running requirejs task
      {
        expand: true,
        flatten: true,
        src: [
          'frontend/bower_components/angular-ui-grid/*.svg',
          'frontend/bower_components/angular-ui-grid/*.ttf',
          'frontend/bower_components/angular-ui-grid/*.woff',
          'frontend/bower_components/angular-ui-grid/*.eot'
        ],
        dest: 'public/assets/css',
        filter: 'isFile'
      }
    ]
  },

  scripts: {
    files: [
      {
        cwd: 'frontend',
        expand: true,
        flatten: false,
        src: [
          '**/*.js'
        ],
        dest: 'public',
        filter: 'isFile'
      }
    ]
  },

  html: {
    files: [
      {
        cwd: 'frontend',
        expand: true,
        flatten: false,
        src: [
          '**/*.html'
        ],
        dest: 'public',
        filter: 'isFile'
      }
    ]
  },

  images: {
    files: [
      {
        cwd: 'frontend',
        expand: true,
        flatten: false,
        src: [
          '**/*.png',
          '**/*.jpg',
          '**/*.jpeg',
          '**/*.gif',
        ],
        dest: 'public',
        filter: 'isFile'
      }
    ]
  }

};
