module.exports = function(grunt) {
	var fs = require('fs'),
		chalk = require('chalk'),
		PACK = grunt.file.readJSON('package.json');
	
	var gc = {
		fontvers: `${PACK.version}`,
		default: [
			"clean:all",
			"concat",
			"uglify:app",
			"uglify:main",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"copy",
			"compress",
			"po2mo",
			"lineending"
		]
	};

	const getDateTime = function(timestamp = 0) {
		let time = new Date(timestamp),
			date = time.getDate(),
			month = time.getMonth() + 1,
			year = time.getFullYear(),
			hour = time.getHours(),
			minute = time.getMinutes(),
			second = time.getSeconds(),
			arrDate = [
				String(year),
				leftPad(month, 2, '0'),
				leftPad(date,  2, '0')
			],
			arrTime = [
				leftPad(hour,   2, '0'),
				leftPad(minute, 2, '0'),
				leftPad(second, 2, '0')
			];
		return arrDate.join('-') + ' ' + arrTime.join(':');

	},
	leftPad = function (str, len, ch) {
		str = String(str);
		let i = -1;
		if (!ch && ch !== 0) ch = ' ';
		len = len - str.length;
		while (++i < len) {
			str = ch + str;
		}
		return str;
	};

	NpmImportPlugin = require("less-plugin-npm-import");
	require('./src/modules/po2mo.js')(grunt);
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : PACK,
		clean: {
			options: {
				force: true
			},
			all: [
				'test/',
				'tests/'
			]
		},
		concat: {
			options: {
				separator: "\n",
			},
			appjs: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/js-cookie/src/js.cookie.js',
					'bower_components/pdfmake/build/pdfmake.js',
					'bower_components/jszip/dist/jszip.js',
					'bower_components/pdfmake/build/vfs_fonts.js',
					'bower_components/datatables.net/js/dataTables.js',
					'bower_components/datatables.net-buttons/js/dataTables.buttons.js',
					'bower_components/datatables.net-buttons/js/buttons.html5.js',
					//'bower_components/datatables.net-select/js/dataTables.select.js',
					'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
					'bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.js',
					//'bower_components/datatables.net-select-bs/js/select.bootstrap.js'

				],
				dest: 'js/appjs.js'
			},
			main: {
				src: [
					'src/js/main.js'
				],
				dest: 'js/main.js'
			},
		},
		uglify: {
			options: {
				sourceMap: false,
				compress: {
					drop_console: false
				},
				output: {
					ascii_only: true
				}
			},
			app: {
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'js/appjs.js',
						],
						dest: 'js',
						filter: 'isFile',
						rename: function (dst, src) {
							return dst + '/' + src.replace('.js', '.min.js');
						}
					}
				]
			},
			main: {
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'js/main.js',
						],
						dest: 'js',
						filter: 'isFile',
						rename: function (dst, src) {
							return dst + '/' + src.replace('.js', '.min.js');
						}
					}
				]
			}
		},
		less: {
			css: {
				options : {
					compress: false,
					ieCompat: false,
					plugins: [
						new NpmImportPlugin({prefix: '~'})
					],
					modifyVars: {
						'icon-font-path': '../fonts/',
					}
				},
				files : {
					'css/main.css' : [
						'bower_components/datatables.net-bs/css/dataTables.bootstrap.css',
						//'bower_components/datatables.net-select-bs/css/select.bootstrap.css',
						'src/less/main.less'
					],
				}
			},
		},
		autoprefixer:{
			options: {
				browsers: [
					"last 4 version"
				],
				cascade: true
			},
			css: {
				files: {
					'css/main.css' : [
						'css/main.css'
					],
				}
			},
		},
		group_css_media_queries: {
			group: {
				files: {
					'css/main.css': ['css/main.css'],
				}
			},
		},
		replace: {
			css: {
				options: {
					patterns: [
						{
							match: /\/\*.+?\*\//gs,
							replacement: ''
						},
						{
							match: /\r?\n\s+\r?\n/g,
							replacement: '\n'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'css/main.css'
						],
						dest: 'css/',
						filter: 'isFile'
					},
				]
			},
			md: {
				options: {
					patterns: [
						{
							match: /%time%/g,
							replacement: parseInt((new Date()).getTime() / 1000)
						},
						{
							match: /%name%/g,
							replacement: PACK.name
						},
						{
							match: /%description%/g,
							replacement: PACK.description
						},
						{
							match: /%version%/g,
							replacement: PACK.version
						},
						{
							match: /%author%/g,
							replacement: PACK.author
						},
						{
							match: /%homepage%/g,
							replacement: PACK.homepage
						},
						{
							match: /%license%/g,
							replacement: PACK.license
						},
						{
							match: /%license_uri%/g,
							replacement: PACK.license_uri
						},
					]
				},
				src: "src/md",
				dest: "README.md"
			},
			php: {
				options: {
					patterns: [
						{
							match: /%time%/g,
							replacement: parseInt((new Date()).getTime() / 1000)
						},
						{
							match: /%name%/g,
							replacement: PACK.name
						},
						{
							match: /%description%/g,
							replacement: PACK.description
						},
						{
							match: /%version%/g,
							replacement: PACK.version
						},
						{
							match: /%author%/g,
							replacement: PACK.author
						},
						{
							match: /%homepage%/g,
							replacement: PACK.homepage
						},
						{
							match: /%license%/g,
							replacement: PACK.license
						},
						{
							match: /%license_uri%/g,
							replacement: PACK.license_uri
						},
						{
							match: /%date%/g,
							replacement: getDateTime((new Date()).getTime())
						},
					]
				},
				src: "edit-file-plugin.php5",
				dest: "food-uploader-plugin.php"
			}
		},
		lineending: {
			main: {
				options: {
					eol: 'lf'
				},
				files: {
					'food-uploader-plugin.php': ['food-uploader-plugin.php'],
					'css/main.css': ['css/main.css'],
					'css/main.min.css': ['css/main.min.css'],
					'js/appjs.js': ['js/appjs.js'],
					'js/appjs.min.js': ['js/appjs.min.js'],
					'js/main.js': ['js/main.js'],
					'js/main.min.js': ['js/main.min.js'],
				}
			},
			readme: {
				options: {
					eol: 'crlf'
				},
				files: {
					'README.md': ['README.md']
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			minify: {
				files: {
					'css/main.min.css' : ['css/main.css'],
				}
			},
		},
		copy: {
			fonts: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/fonts',
				src: [
					'**'
				],
				dest: 'fonts/',
			},
			icons_full: {
				expand: true,
				cwd: 'bower_components/food/icons-full',
				src: [
					'**'
				],
				dest: 'lib/icons-full',
			},
			viewer: {
				expand: true,
				cwd: 'bower_components/food/viewer',
				src: [
					'**'
				],
				dest: 'lib/viewer',
			},
		},
		po2mo: {
			main: {
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/languages/*.po'
						],
						dest: 'languages/',
						filter: 'isFile'
					},
				]
			},
		},
		compress: {
			main: {
				options: {
					archive: 'food-uploader-plugin.zip'
				},
				files: [
					{
						expand: true,
						cwd: '.',
						src: [
							'food-uploader-plugin.php',
							'options.php',
							'screenshot.png',
							'README.md',
							'LICENSE',
							'css/**',
							'fonts/**',
							'js/**',
							'languages/**',
							'lib/**'
						],
						dest: '/food-uploader-plugin/'
					},
				],
			},
		},
	});
	grunt.registerTask('default',	gc.default);
	grunt.registerTask('zip',	["compress"]);
};
