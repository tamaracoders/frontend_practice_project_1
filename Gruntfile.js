module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'css/styles.css': 'scss/styles.scss'
                }
            }
        },
        postcss: {
            options: {
                map: false,

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}),
                ]
            },
            dist: {
                src: 'css/styles.css'
            }
        },
        watch: {
            files: ['scss/**/*.scss'],
            tasks: ['sass', 'postcss'],
            reload: {
                files: ['css/styles.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}