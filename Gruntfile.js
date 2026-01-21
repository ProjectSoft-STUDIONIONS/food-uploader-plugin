module.exports = function(grunt) {
	var fs = require('fs'),
		chalk = require('chalk'),
		PACK = grunt.file.readJSON('package.json');
	
	var gc = {
		fontvers: `${PACK.version}`,
		default: [
			"clean:all",
			"replace_htaccess",
			"concat",
			"uglify:app",
			"uglify:main",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"copy",
			"po2mo",
			"lineending",
			"compress",
			"pug"
		],
		src: [
			'bower_components/sprintf/dist/sprintf.min.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/js-cookie/src/js.cookie.js',
			'bower_components/pdfmake/build/pdfmake.js',
			'bower_components/jszip/dist/jszip.js',
			'bower_components/pdfmake/build/vfs_fonts.js',
			'bower_components/datatables.net/js/dataTables.js',
			'bower_components/datatables.net-buttons/js/dataTables.buttons.js',
			'bower_components/datatables.net-buttons/js/buttons.html5.js',
			'bower_components/datatables.net-buttons/js/buttons.print.js',
			'bower_components/datatables.net-buttons/js/buttons.colVis.js',
			'bower_components/datatables.net-select/js/dataTables.select.js',
			'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
		]
	};

	const getDateTime = function(timestamp = 0) {
		let time = new Date(timestamp);
		return [
			String(time.getFullYear()),
			leftPad(time.getMonth() + 1, 2, '0'),
			leftPad(time.getDate(),  2, '0')
		].join('-')
		+ " " +
		[
			leftPad(time.getHours(),   2, '0'),
			leftPad(time.getMinutes(), 2, '0'),
			leftPad(time.getSeconds(), 2, '0')
		].join(':');
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
	require('./src/modules/replace_htaccess.js')(grunt);
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
				'*.zip',
				'test/',
				'tests/'
			]
		},
		concat: {
			options: {
				separator: "\n",
			},
			appjs: {
				src: gc.src,
				dest: 'js/appjs.js'
			},
			main: {
				src: [
					'src/js/main.js'
				],
				dest: 'js/main.js'
			},
			print: {
				src: [
					'src/js/print.js'
				],
				dest: 'js/print.js'
			},
		},
		uglify: {
			app: {
				options: {
					sourceMap: false,
					compress: {
						drop_console: false
					},
					output: {
						ascii_only: true
					}
				},
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
				options: {
					sourceMap: false,
					compress: {
						drop_console: false
					},
					output: {
						ascii_only: true
					}
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'js/main.js',
							'js/print.js',
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
						'src/less/main.less'
					],
					'src/css/main.css': [
						'src/less/site.less'
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
					'src/css/main.css': [
						'src/css/main.css'
					],
				}
			},
		},
		group_css_media_queries: {
			group: {
				files: {
					'css/main.css': [
						'css/main.css'
					],
					'src/css/main.css': [
						'src/css/main.css'
					],
				}
			},
		},
		replace_htaccess: {
			food: {
				files: {
					'lib/tmpl/htaccess.php': 'bower_components/food/food/.htaccess'
				}
			}
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
					{
						expand: true,
						flatten : true,
						src: [
							'src/css/main.css'
						],
						dest: 'src/css/',
						filter: 'isFile'
					},
				]
			},
			readme: {
				options: {
					patterns: [
						{
							match: /\[comment\].*\)\s+$/s,
							replacement: `[comment]: <> ( Plugin Name:        Food File Uploader )
[comment]: <> ( Plugin URI:         https://github.com/ProjectSoft-STUDIONIONS/food-uploader-plugin )
[comment]: <> ( Description:        ${PACK.description} )
[comment]: <> ( Version:            ${PACK.version} )
[comment]: <> ( Author:             Чернышёв Андрей aka ProjectSoft <projectsoft2009@yandex.ru> )
[comment]: <> ( Author URI:         https://github.com/ProjectSoft-STUDIONIONS )
[comment]: <> ( GitHub Plugin URI:  https://github.com/ProjectSoft-STUDIONIONS/food-uploader-plugin )
[comment]: <> ( License:            GPL-2.0 )
[comment]: <> ( License URI:        https://mit-license.org/ )
[comment]: <> ( Donate link:        https://projectsoft.ru/donate/ )
`
						},
					]
				},
				src: "README.md",
				dest: "README.md"
			},
			php: {
				options: {
					patterns: [
						{
							match: /\/\*.*\*\//s,
							replacement: `/*
	Plugin Name:        Food File Uploader
	Plugin URI:         ${PACK.homepage}
	Description:        ${PACK.description}
	Version:            ${PACK.version}
	Author:             ${PACK.author}
	Author URI:         https://github.com/ProjectSoft-STUDIONIONS/
	GitHub Plugin URI:  ${PACK.homepage}
	License:            ${PACK.license}
	License URI:        ${PACK.license_uri}
	Donate link:        https://projectsoft.ru/donate/
	Domain Path:        languages/
	Text Domain:        ${PACK.name}
	Requires at least:  5.7
	Requires PHP:       7.4
	Creation Date:      2025-02-06 04:18:00
	Last Update:        ${getDateTime((new Date()).getTime())}
*/`
						},
					]
				},
				src: "food-uploader-plugin.php",
				dest: "food-uploader-plugin.php"
			},
		},
		lineending: {
			main: {
				options: {
					eol: 'lf'
				},
				files: {
					'food-uploader-plugin.php': ['food-uploader-plugin.php'],
					'css/main.css': ['css/main.css'],
					'src/css/main.css': ['src/css/main.css'],
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
					'src/css/main.css' : ['src/css/main.css'],
				}
			},
		},
		copy: {
			fontsFood: {
				expand: true,
				cwd: 'bower_components/webfont-food/dest/fonts',
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
							'languages/*.po'
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
		pug: {
			docs: {
				options: {
					doctype: 'html',

					client: false,
					pretty: '\t',
					separator:  '\n',
					data: function(dest, src) {
						return {
							versions: [
								"2.2.2",
								"2.2.1",
								"2.2.0",
								"2.1.9",
								"2.1.8",
								"2.1.7",
								"2.1.5",
								"2.1.4",
								"2.1.3",
								"2.1.1",
								"2.1.0",
								"2.0.0",
								"1.0.2",
								"1.0.0"
							]
						};
					}
				},
				files: [
					{
						expand: true,
						cwd: __dirname + '/src/pug/',
						src: [ 'index.pug' ],
						dest: __dirname + '/docs/',
						ext: '.html'
					},
				]
			}
		},
	});
	grunt.registerTask('default',	gc.default);
	grunt.registerTask('zip',	["compress"]);
};
