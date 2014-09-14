'use strict';

module.exports = function( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    var configs = {
        dirs: {
            dev: {
                base: '../app',
                css: '../app/css',
                scss: '../app/scss',
                fonts: '../app/fonts',
                img: '../app/img',
                js: '../app/js',
                templates: '../app/js/templates'
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= dirs.dev.base %>/*.html',
                        '<%= dirs.dev.css %>/*.css',
                        '<%= dirs.dev.js %>/**/*.js',
                        '<%= dirs.dev.templates %>/*.js'
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        host: '192.168.1.1',
                        baseDir: '<%= dirs.dev.base %>'
                    }
                }
            }
        },

        watch: {
            css: {
                files: [ '<%= dirs.dev.scss %>/**/*.scss' ],
                tasks: [ 'compass' ]
            },

            js: {
                files: [
                    '<%= dirs.dev.js %>/**/*.js',
                    '!<%= dirs.dev.templates %>/*.js' ],
                tasks: [ 'jshint' ]
            },

            templates: {
                files: [
                    '<%= dirs.dev.templates %>/helpers/*.js',
                    '<%= dirs.dev.templates %>/**/*.hbs'
                ],

                tasks: [ 'handlebars:compile' ]
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: '<%= dirs.dev.scss %>',
                    cssDir: '<%= dirs.dev.css %>',
                    imagesDir: '<%= dirs.dev.img %>',
                    javascriptsDir: '<%= dirs.dev.js %>',
                    fontsDir: '<%= dirs.dev.fonts %>',
                    outputStyle: 'compressed'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    '<%= dirs.dev.js %>/libs/*.js',
                    '<%= dirs.dev.templates %>/templates.js'
                ]
            },

            all: [
                'Gruntfile.js',
                '<%= dirs.dev.js %>/**/*.js'
            ]
        },

        handlebars: {
            compile: {
                options: {
                    amd: [ 'handlebars', 'helpers' ],

                    processName: function( filePath ) {
                        return filePath.replace(/^..\/app\/js\/templates\//, '').replace(/\.hbs$/, '');
                    }
                },

                files: {
                    '<%= dirs.dev.templates %>/templates.js': '<%= dirs.dev.templates %>/*.hbs'
                }
            }
        }
    };

    grunt.initConfig( configs );

    grunt.registerTask( 'default', [ 'browserSync:dev', 'watch' ] );
};
