'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        watch: {
            css: {
                files: 'app/css/**/*.scss',
                tasks: ['compass:dev']
            },
            js: {
                files: ['app/js/**/*.js'],
                tasks: ['copy:mainjs', 'copy:sections'],
            },
            html: {
                files: ['app/**/*.hbs'],
                tasks: ['assemble']
            },
            img: {
                files: ['app/img/**/*.{jpg,gif,png}'],
                tasks: ['copy:img']
            },
            fonts: {
                files: ['app/fonts/**/*.{otf,ttf,woff,eot,svg}'],
                tasks: ['copy:fonts']
            },
            json: {
                files: ['app/data/**/*.json'],
                tasks: ['assemble']
            },
            livereload: {
                options: {
                    livereload: 35729
                },
                files: [
                    'app/**/*.hbs',
                    'app/css/**/*.scss',
                    'app/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },


        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css/',
                    ext: '.min.css'
                }]
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0', // change this to '0.0.0.0' to access the server from outside
                livereload: 35729
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('build')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('build')
                        ];
                    }
                }
            }
        },

        assemble: {
            options: {
                assets: 'app/',
                plugins: ['permalinks'],
                partials: ['app/partials/**/*.hbs'],
                layoutdir: 'app/layouts',
                data: ['app/data/**/*.{json,yml}']
            },
            site: {
                options: {
                    layout: 'layout.hbs',
                    assets: 'build/'
                },
                expand: true,
                cwd: 'app/pages/',
                src: ['**/*.hbs'],
                dest: 'build/'
            }
        },

        jshint: {
            all: [
                'app/js/**/*.js',
                '!app/js/vendor/**/*.js'
            ]
        },

        compass: {
            build: {
                options: {
                    sassDir: 'app/css',
                    cssDir: 'build/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'app/css',
                    cssDir: 'build/css'
                }
            }
        },

        copy: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'app/js/vendor/',
                    src: '**/*',
                    dest: 'build/js/vendor/'
                }, ],
            },
            css: {
                files: [{
                    expand: true,
                    cwd: 'app/css/vendor/',
                    src: '**/*',
                    dest: 'build/css/vendor/'
                }, ],
            },
            mainjs: {
                files: [{
                    expand: true,
                    cwd: 'app/js/',
                    src: 'main.js',
                    dest: 'build/js/'
                }, ],
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'app/img/',
                    src: '**/*',
                    dest: 'build/img/'
                }, ],
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: 'app/fonts/',
                    src: '**/*',
                    dest: 'build/fonts/'
                }, ],
            },
            swf: {
                files: [{
                    expand: true,
                    cwd: 'app/swf/',
                    src: '**/*',
                    dest: 'build/swf/'
                }]
            },
            audio: {
                files: [{
                    expand: true,
                    cwd: 'app/audio/',
                    src: '**/*',
                    dest: 'build/audio/'
                }]
            },
            etc: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: '*.{png,ico,jpg,gif,md,txt}',
                    dest: 'build/'
                }]
            },
            sections: {
                files: [{
                    expand: true,
                    cwd: 'app/js/sections/',
                    src: '*.js',
                    dest: 'build/js/sections/'
                }]
            }
        },


        uglify: {
            mainjs: {
                src: 'build/js/main.js',
                dest: 'build/js/main.min.js'

            },
            sectionsjs: {
                src: 'build/js/sections.js',
                dest: 'build/js/sections.min.js'

            }


        },

        open : {
            dev : {
                path: 'http://0.0.0.0:9000',
                //app: 'Google Chrome'
                app: 'Firefox'
            }
        },

        prettify: {
            options: {
                indent: 4,
                indent_char: ' ',
                wrap_line_length: 0,
                brace_style: 'collapse',
                unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
            },
            // Prettify a directory of files
            all: {
                expand: true,
                cwd: 'build/',
                ext: '.html',
                src: ['*.html'],
                dest: 'build/'
            }
        },

        clean: {
            html: ['build/**/*.html'],
            js: ['build/js'],
            css: ['build/css'],
            img: ['build/img']
        },



        validation: {
            options: {
                reset: grunt.option('reset') || true,
                stoponerror: false,
                serverUrl: "http://localhost/w3c-validator/check",
                path: "build/validation-status.json",
                reportpath: "build/validation-report.json",
                relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
            },
            files: {
                src: ['build/**/*.html',
                    '!build/_dev/*.html',
                    //'!<%= yeoman.app %>/modules.html',
                    //'!<%= yeoman.app %>/404.html']
                ]
            }
        }



    });

    grunt.loadNpmTasks('assemble'); // Special case
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html-validation');

    // Default task(s).
    grunt.registerTask('default', [
        'jshint',
        'assemble',
        'compass:dev',
        'copy',
        'connect:livereload',
        'open',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'assemble',
        'compass:build',
        'copy',
        'uglify',
        'cssmin',
        
    ]);


    grunt.registerTask('validate', [
        'jshint',
        'assemble',
        'compass:dev',
        'copy',
        'validation'
    ]);
};