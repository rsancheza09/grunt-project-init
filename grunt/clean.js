module.exports = {

  dev: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        'public/assets/less'
      ]
    }]
  },

  prod: {
    files: [{
      dot: true,
      src: [
        'public/assets/less',
        'public/app/**/*.js',
        '.tmp'
      ]
    }]
  }

};
