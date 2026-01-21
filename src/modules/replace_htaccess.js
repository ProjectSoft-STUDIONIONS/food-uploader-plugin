'use strict';

const fs = require('node:fs');
const chalk = require('chalk');
module.exports = function(grunt) {
	grunt.registerMultiTask('replace_htaccess', 'replace_htaccess', function() {
		chalk.level = 3;
		var options = this.options({
			deleteSrc: false,
		});

		this.files.forEach(function(file) {
			var src = file.src[0];
			var dest = file.dest;
			var startDate = grunt.template.date(new Date(), "HH:MM:ss.l");
			grunt.verbose.writeln('Source      ' + chalk.yellowBright(startDate) + ' : ' + chalk.cyan(src));
			let fileDump = fs.readFileSync(src).toString();
			let htaccess = `<?php\n\n$htaccess = '${fileDump}\n';\n`;
			fs.writeFileSync(dest, htaccess, {
				encoding: 'utf8'
			});
			var endDate = grunt.template.date(new Date(), "HH:MM:ss.l");
			grunt.verbose.writeln('Destination ' + chalk.yellowBright(endDate) + ' : ' + chalk.cyan(dest));
		});
	});

};