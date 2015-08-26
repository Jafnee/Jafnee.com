module.exports = function(grunt) {
	grunt.initConfig({
		mycfg: {
			srcdir: 	'src',
			distdir: 	'dist',
			src: {
				scss: 	'<%= mycfg.srcdir %>/scss',
				js: 	'<%= mycfg.srcdir %>/js',
				img: 	'<%= mycfg.srcdir %>/img'
			},
			dist: {
				css: 	'<%= mycfg.distdir %>/css',
				js: 	'<%= mycfg.distdir %>/js',
				img: 	'<%= mycfg.distdir %>/img'
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'<%= mycfg.dist.css %>/style.css' : '<%= mycfg.src.scss %>/style.scss'
				}
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '<%= mycfg.dist.css %>/',
		      src: ['*.css', '!*.min.css'],
		      dest: '<%= mycfg.dist.css %>/',
		      ext: '.min.css'
		    }]
		  }
		},
		watch: {
			css: {
				files: '<%= mycfg.src.scss %>/*.scss',
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
		        cwd: '<%= mycfg.src.scss %>/',
		        src: ['**/*.{png,jpg,gif}'],
		        dest: '<%= mycfg.dist.scss %>/'
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
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['sass', 'cssmin', 'imgmin']);
	grunt.registerTask('deploy', ['shell:dep']);
	grunt.registerTask('buildndeploy', ['build', 'shell:dep']);
}