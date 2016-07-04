'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
gulp.task('html', function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('css', function() {
  gulp.src([ 'src/style.scss' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('javascript', function() {
  browserify('src/script.js').bundle()
      .pipe(source('script.js', './src').on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('default', [ 'html', 'css', 'javascript' ]);

/*
  eslint-env node
*/
