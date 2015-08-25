module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'src/scss/style.scss'
				}
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'css/',
		      ext: '.min.css'
		    }]
		  }
		},
		watch: {
			css: {
				files: 'src/scss/*.scss',
				tasks: ['sass', 'cssmin']
			}
		},
		shell: {
			dep: {
				command: './deploy.sh'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('dev',['watch']);
	grunt.registerTask('build', ['sass', 'cssmin']);
	grunt.registerTask('deploy', ['build', 'shell:dep']);
}