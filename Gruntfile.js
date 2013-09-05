module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mocha-script');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		mocha_script: {
			compile: {
				options: {},
				files: {
					"dist/compiled.js": ["src/{,*/}*.mocha"]
				}
			}
		},

		watch: {
			scripts: {
				files: ["src/{,*/}*.mocha"],
				tasks: ["compile"]
			}
		}
	});

	grunt.registerTask('compile', ['mocha_script']);
	grunt.registerTask('default', ['compile', 'watch']);
};
