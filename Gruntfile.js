module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: [ 'modules/**/*.js', 'react_components/*.jsx'],
        tasks: ['browserify', 'jshint']
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['react_components/**/*.jsx', 'modules/main.js'],
        dest: 'public/js/app.built.js'
      }
    },
    jshint: {
      all: ['modules/main.js', 'modules/**/*.js', 'react_components/*.jsx'],
      options: {
        newcap: false
      }
    }
  });

grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-jsxhint');
grunt.registerTask('default', ['browserify']);

};
