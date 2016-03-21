module.exports = {

  options: {
    livereload: true
  },

  css: {
    files: [
      'frontend/assets/less/**/*.less'
    ],
    tasks: [
      'less'
    ]
  },

  scripts: {
    files: [
      'frontend/**/*.js',
    ],
    tasks: [
      'copy:scripts'
    ]
  },

  html: {
    files: [
      'frontend/**/*.html'
    ],
    tasks: [
      'copy:html'
    ]
  },

  images: {
    files: [
      'frontend/**/*.png',
      'frontend/**/*.jpg',
      'frontend/**/*.jpeg',
      'frontend/**/*.gif',
    ],
    tasks: [
      'copy:images'
    ]
  }

};