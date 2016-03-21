module.exports = {
	myapp: {
    src: 'api/endpoints',
    dest: "public/docs/api",
    options: {
      debug: true,
      includeFilters: [ ".*\\.js$" ],
      excludeFilters: [ "node_modules/" ]
    }
  }
 };