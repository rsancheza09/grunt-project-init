module.exports = {

  options: {
    dest: 'public/docs/angular_docs',
    html5Mode: false,
    scripts: [
      'frontend/bower_components/angular/angular.js',
      'frontend/bower_components/angular-animate/angular-animate.js'
    ]
  },

  api: {
    src: ['frontend/app/**/*.js', '!frontend/app/**/*-spec.js'],
    title: 'Superglue Angular Docs'
  }

};