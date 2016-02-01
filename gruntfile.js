module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    protractor: {
      configFile: 'test/e2e/conf.js'
    }

  })
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
};
