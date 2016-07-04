[1. Project Setup][setup] &nbsp;&lt;&nbsp; Previous Page

[setup]: 1_setup.sh.md

# 2. Build Configuration

By default, [gulp][gulp] searches for `gulpfile.js` from which it reads task
definitions for the build.

[gulp]: https://github.com/gulpjs/gulp

## 2.1. gulpfile.js

By convention, all node files should contain require calls at the top. We need
gulp for IO and to create task definitions, and gulp plugins for
[browserify][browserify] and [sass][sass].

[browserify]: https://github.com/substack/node-browserify
[sass]: https://github.com/sass/sass

```js
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
```

In gulp, each type of compilation is done in a separate [pipeline][pipeline]
(which is called a gulp task). Data that flows through these pipelines takes
form of file objects (which are called [vinyls][vinyl]).
Stream of vinyls is piped from one plugin to another, each of which may
transform the stream (file names may be changed, file contents may be altered,
objects may be filtered etc.).

[pipeline]: https://en.wikipedia.org/wiki/Pipeline_(software)
[vinyl]: https://github.com/gulpjs/vinyl

No transformation will be needed for HTML source file.
It will only be copied into build folder.

```js
gulp.task('html', function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
```
Piping Sass sources through sass plugin will produce browser-readable CSS.
Pretty straight forward.

```js
gulp.task('css', function() {
  gulp.src([ 'src/style.scss' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
```

Browserify is not a gulp plugin, so using it is a bit tricky. Browserify's
[bundle method][browserify-bundle] returns compiled JavaScript in form of
a simple text stream. [vinyl-source-stream][vinyl-source-stream] plugin
consumes this text stream and makes an gulp-compatible vinyl stream out of its
content. File name must be provided twice. First time for the browserify,
second time to create vinyl object.

[browserify-bundle]: https://github.com/substack/node-browserify#bbundlecb
[vinyl-source-stream]: https://github.com/hughsk/vinyl-source-stream

```js
gulp.task('javascript', function() {
  browserify('src/script.js').bundle()
      .pipe(source('script.js', './src').on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
```

Lastly, a default gulp task that connects everything.

```js
gulp.task('default', [ 'html', 'css', 'javascript' ]);

/*
  eslint-env node
*/
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [3. JavaScript Module][js-module]

[js-module]: 3_script.js.md

