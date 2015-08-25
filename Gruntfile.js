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
		},
		imagemin: {
			dynamic: {
		      files: [{
		        expand: true,
		        cwd: 'src/img/',
		        src: ['**/*.{png,jpg,gif}'],
		        dest: 'img/'
		    	}]
	    	}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('dev',['watch']);
	grunt.registerTask('imgmin', ['newer:imagemin']);
	grunt.registerTask('default', ['sass', 'cssmin', 'imgmin']);
	grunt.registerTask('deploy', ['shell:dep']);
	grunt.registerTask('buildndeploy', ['default', 'shell:dep']);
}