module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    copy: {
      main: {
        cwd: 'src', // set working folder / root to copy
        src: '**/*', // copy all files and subfolders
        dest: 'dist', // destination folder
        expand: true // required when using cwd
      },
      files: {
        cwd: 'src', // set working folder / root to copy
        src: '**/*', // copy all files and subfolders
        dest: '../iamlee-freelancer/dist/ageulator', // destination folder
        expand: true // required when using cwd
      }
    }
  });

  grunt.registerTask('gather', ['copy:main']);

  grunt.registerTask('copy', ['copy:main', 'copy:files']);

  grunt.loadNpmTasks('grunt-contrib-copy');
};
