
module.exports = function ( grunt ) {

  var globalConfig = {
    minify: !grunt.option( 'dev' )
  };

  grunt.initConfig({

    globalConfig: globalConfig,

    ejs: {
      html: {
        src: [ 'source/templates/pages/**/*' ],
        dest: '.tmp/',
        expand: true,
        ext: '.html'
      }
    },

    sass: {
      dist: {
        options: {
          style: globalConfig.minify ? 'compact' : 'expanded',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'source/assets/scss',
          src: ['*.scss'],
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require( 'autoprefixer' )
        ]
      },
      dist: {
        src: '.tmp/assets/css/**/*.css'
      }
    },

    import: {
      options: {},
      dist: {
        expand: true,
        cwd: 'source/assets/js/',
        src: '**/*.js',
        dest: '.tmp/assets/js/',
        ext: '.js'
      }
    },

    assets_inline: {
      all: {
        files: {
          'dist/index.html': '.tmp/source/templates/pages/index.html'
        },
        options: {
          minify: globalConfig.minify,
          jsDir:  ".tmp/assets/js/",
          cssDir: ".tmp/assets/css/"
        },
      },
    },

    clean: {
      build: [ '.tmp' ]
    },

    watch: {
      files: [ 'source/**/*' ],
      tasks: [ 'ejs', 'js', 'css', 'assets_inline' ] // no cleaning
    },

  });

  grunt.loadNpmTasks( 'grunt-ejs' );
  grunt.loadNpmTasks( 'grunt-import' );
  grunt.loadNpmTasks( 'grunt-assets-inline' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-postcss' );

  grunt.registerTask( 'default', [ 'ejs', 'js', 'css', 'assets_inline', 'clean:build' ]);
  grunt.registerTask( 'live', [ 'default', 'watch' ]);
  grunt.registerTask( 'css', [ 'sass', 'postcss' ]);
  grunt.registerTask( 'js', [ 'import:dist' ]);


};
