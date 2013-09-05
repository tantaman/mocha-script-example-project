module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mocha-script');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		mocha_script: {
			compile: {
				options: {},
				files: [{
                    expand: true,
                    cwd: 'src',
                    src: '{,*/}*.mocha',
                    dest: 'dist',
                    ext: '.js'
                }]
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
