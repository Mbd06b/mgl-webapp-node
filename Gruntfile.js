module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/angular/',
            src: ['angular.min.js'],
            dest: 'src/main/webapp/resources/js/'
          }
        ]
      }
    }
  });

	// These plugins provide necessary tasks
	require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['copy']);
};