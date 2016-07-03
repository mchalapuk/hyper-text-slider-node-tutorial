var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var sass = require('gulp-sass');
gulp.task('javascript', function() {
  gulp.src([ 'src/script.js' ])
      .pipe(browserify().bundle().on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('css', function() {
  gulp.src([ 'src/style.sass' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('html', function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
gulp.task('default', [ 'html', 'css', 'javascript' ]);
