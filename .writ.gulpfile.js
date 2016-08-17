'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var writ = require('gulp-writ');
var rename = require('gulp-rename2');
var eslint = require('gulp-eslint');
var stylelint = require('gulp-stylelint');
var connect = require('gulp-connect');
var fixme = require('fixme');
var del = require('del');
var _ = require('underscore');
var child = require('child_process');

var config = require('./.writ.config');

gulp.task('clean', function(callback) {
  return del([
      config.dir.src +'**/*',
      '!'+ config.dir.src,
    ],
    { force: true },
    callback)
  ;
});

gulp.task('generate', [ 'clean' ], function() {
  return gulp.src(config.files.doc)
    .pipe(writ().on('error', gutil.log))
    .pipe(rename(function(pathObj, filePath) {
      var basename = pathObj.basename(filePath).replace(/^[0-9]+_/, '');
      var nobase = config.files.config.concat(config.files.setup);
      if (nobase.indexOf(basename) !== -1) {
        return basename;
      }
      return pathObj.dirname(filePath) +'/'+ basename;
    }))
    .pipe(gulp.dest(config.dir.src))
  ;
});

gulp.task('lint:config', function() {
  return gulp.src(config.files.config)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('lint:sass', function() {
  return gulp.src(config.files.css)
    .pipe(stylelint({
      reporters: [ { formatter: 'string', console: true } ],
    }))
  ;
});

gulp.task('lint:javascript', function() {
  return gulp.src(config.files.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('lint', [ 'lint:config', 'lint:sass', 'lint:javascript' ]);

gulp.task('dist', [ 'generate' ], function() {
  child.execSync('gulp');
});

gulp.task('default', [ 'dist' ], function() {
  return gulp.start('lint').on('task_stop', gutil.noop);
});

gulp.task('fixme', _.partial(fixme, {
  file_patterns: [ '**/*.js', '**/*.scss' ],
  ignored_directories: [ 'node_modules/**', '.git/**', 'dist/**' ],
}));

gulp.task('watch', [ 'default' ], function() {
  gulp.watch(config.files.config, [ 'lint:config' ]);
  gulp.watch(config.files.css, [ 'lint:sass' ]);
  gulp.watch(config.files.js, [ 'lint:javascript' ]);
  gulp.watch(config.files.doc, [ 'dist' ]);

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

