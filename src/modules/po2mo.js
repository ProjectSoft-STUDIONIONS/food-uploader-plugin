'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('po2mo', 'Compile .po files into binary .mo files with msgfmt.', function() {

    var options = this.options({
      deleteSrc: false,
    });

    this.files.forEach(function(file) {
      const { execSync } = require('node:child_process');
      var src = file.src[0];
      var dest = file.dest;
      if (dest.indexOf('.po') > -1) {
        dest = dest.replace('.po', '.mo');
      }
      grunt.file.write(dest);

      var command = 'msgfmt -o ' + dest + ' ' + src;
      grunt.verbose.writeln('Executing: ' + command);
      const result = execSync(command);
      grunt.verbose.writeln('Executed with status: ' + result.status);
    });

  });

};