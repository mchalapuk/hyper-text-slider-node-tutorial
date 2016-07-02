'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var writ = require('gulp-writ');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var stylelint = require('gulp-stylelint');
var browserify = require('gulp-browserify');
var jasmine = require('gulp-jasmine');
var connect = require('gulp-connect');
var sequence = require('gulp-sequence');
var fixme = require('fixme');
var del = require('del');
var _ = require('underscore');

var config = require('./build.config');

gulp.task('lint:config', function() {
  return gulp.src(config.files.config)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('generate:code', function() {
  return gulp.src(config.files.doc)
    .pipe(writ().on('error', gutil.log))
    .pipe(gulp.dest(config.dir.src))
  ;
});

gulp.task('lint:sass', function() {
  return gulp.src(config.files.css)
    .pipe(stylelint({
      reporters: [ { formatter: 'string', console: true } ],
    }))
  ;
});

gulp.task('sass', [ 'lint:sass' ], function() {
  return gulp.src(config.files.css)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('lint:javascript', function() {
  return gulp.src(config.files.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('javascript', [ 'lint:javascript' ], function() {
  return gulp.src(config.files.js)
    .pipe(browserify())
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('lint:spec', function() {
  return gulp.src(config.files.spec)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('spec', [ 'lint:spec' ], function() {
  return gulp.src(config.files.spec)
    .pipe(jasmine({
      // verbose: true,
      includeStackTrace: true,
    }))
  ;
});

gulp.task('clean', function(callback) {
  return del([
      config.dir.src +'**/*',
      '!'+ config.dir.src,
      config.dir.build +'**/*',
      '!'+ config.dir.build
    ],
    { force: true },
    callback)
  ;
});

gulp.task('dist', [ 'clean' ], sequence('generate:code', 'sass', 'spec', 'javascript'));

gulp.task('fixme', _.partial(fixme, {
  file_patterns: [ '**/*.js', '**/*.scss' ],
  ignored_directories: [ 'node_modules/**', '.git/**', 'dist/**' ],
}));

gulp.task('default', [ 'lint:config', 'dist' ]);

gulp.task('watch', [ 'default' ], function() {
  gulp.watch(config.files.config, [ 'lint:config' ]);
  gulp.watch(config.files.css, [ 'sass' ]);
  gulp.watch(config.files.js, [ 'javascript', 'spec' ]);
  gulp.watch(config.files.spec, [ 'spec' ]);
  gulp.watch(config.files.doc, [ 'generate' ]);

  connect.server({
    root: [ 'dist' ],
    port: 8889,
    livereload: false,
  });
});

/*
  eslint-env node
*/

/*
  eslint camelcase:0
*/

