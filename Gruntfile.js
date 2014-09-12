module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: [ "modules/**/*.js", "react_components/*.js"],
        tasks: ['browserify']
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['react_components/**/*.js', 'modules/main.js'],
        dest: 'public/js/app.built.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'browserify'
  ]);
};
