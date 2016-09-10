'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var del = require('del');
[ 'html', 'css', 'js' ].forEach(function(ext) {
  gulp.task('clean:'+ ext, function(callback) {
    return del([ 'dist/*.'+ ext ], callback);
  });
});
gulp.task('html', [ 'clean:html' ], function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('css', [ 'clean:css' ], function() {
  gulp.src([ 'src/style.scss' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('javascript', [ 'clean:js' ], function() {
  return browserify('src/script.js').bundle()
      .pipe(source('script.js', './src').on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('default', [ 'html', 'css', 'javascript' ]);
