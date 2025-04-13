'use strict';

module.exports = function(grunt) {
	const fs = require('node:fs');
	grunt.registerMultiTask('replace_htaccess', 'replace_htaccess', function() {

		var options = this.options({
			deleteSrc: false,
		});

		this.files.forEach(function(file) {
			var src = file.src[0];
			var dest = file.dest;
			grunt.verbose.writeln('Src : ' + src);
			grunt.verbose.writeln('Dest: ' + dest);
			let fileDump = fs.readFileSync(src).toString();
			let htaccess = `<?php\n\n$htaccess = '${fileDump}\n';\n`
			fs.writeFileSync(dest, htaccess, {
				encoding: 'utf8'
			});
		});

	});

};