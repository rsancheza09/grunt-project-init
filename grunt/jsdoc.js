module.exports = {

  dist: {
        // src: ['api/endpoints/**/*.js', 'README.md'],
        src: ['api/endpoints/**/*.js'],
        options: {
            destination: 'docs/api',
            template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
            configure : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json"
        }
    }

};