module.exports = function(grunt) {
    // Chargement automatique de tous nos modules
    require('load-grunt-tasks')(grunt);

    // Configuration des plugins
    grunt.initConfig({
        /*compass: {
         sass: {
         options: {
         sassDir: 'src/Helios/BlogBundle/Resources/scss',
         cssDir: '.tmp/css',
         importPath: 'app/Resources/lib',
         outputStyle: 'expanded',
         noLineComments: true
         }
         }
         }, *///end compass
        typescript: {
            base: {
                src: ['src/cryptodata/BlogBundle/Resources/ts/*ts'],
                dest: '.tmp/js',
                options: {
                    target: 'es5', //or es3
                    module: 'amd', //or commonjs
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        cssmin: {
            combine: {
                options:{
                    report: 'gzip',
                    keepSpecialComments: 0
                },
                files: {
                    'web/css/app.min.css': [
                        'app/Resources/lib/bootstrap/dist/css/bootstrap.min.css',
                        'web/css/main.css',
                        'web/css/fonts.css',
                        '.tmp/css/**/*.css'
                    ]
                }
            }
        }, //end cssmin
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapName: 'web/built/app.map'
            },
            dist: {
                files: {
                    'web/js/app.min.js':[
                        'app/Resources/lib/bootstrap/dist/js/bootstrap.min.js',
                        'web/js/main.js',
                        '.tmp/js/**/*.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: [
                    'web/css/*.css'
                ],
                tasks: ['css']
            },
            javascript: {
                files: [
                    'web/js/*.js'
                ],
                tasks: ['javascript']
            }
        },

        // Copie les fichiers automatiquement
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/Resources/lib/fontawesome/fonts',
                    dest: 'web/fonts',
                    src: ['**']
                }]
            }
        }
    });

    // Déclaration des différentes tâches
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('javascript', ['uglify']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('cp', ['copy']);
};



