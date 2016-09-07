[1. Project Setup][setup] &nbsp;&lt;&nbsp; Previous Page

[setup]: 1_setup.sh.md

# 2. Build Configuration

By default, [gulp][gulp] searches for `gulpfile.js` from which it reads task
definitions for the build.

[gulp]: https://github.com/gulpjs/gulp

By convention, all node files should contain require calls at the top.
We will need gulp for IO and to create task definitions,
gulp plugins for [browserify][browserify] and [sass][sass],
and [del][del] to implement clean tasks.

[browserify]: https://github.com/substack/node-browserify
[sass]: https://github.com/sass/sass
[del]: https://github.com/sindresorhus/del

```js
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var del = require('del');
```

In gulp, each type of compilation is done in a separate [pipeline][pipeline]
(which is called a gulp task). Through these pipelines flows data objects
which represent files and are called [vinyls][vinyl].
Stream of&nbsp;vinyls is piped from one plugin to another, each of which may
transform the stream (file names may be changed, file contents may be altered,
objects may be augmented or filtered).

[pipeline]: https://en.wikipedia.org/wiki/Pipeline_(software)
[vinyl]: https://github.com/gulpjs/vinyl

## 2.1. Clean Tasks

We need a clean task for each type of compilation. There will be 3 types of
source files in the project (HTML, CSS, and&nbsp;JavaScript), so we need 3 clean
tasks.
Sorce code of each clean task will be identical, just with different glob
pattern used to delete files.
Code below creates `clean:html`, `clean:css` and `clean:js`.

```js
[ 'html', 'css', 'js' ].forEach(function(ext) {
  gulp.task('clean:'+ ext, function(callback) {
    return del([ 'dist/*.'+ ext ], callback);
  });
});
```

In order to delete files with [del][del] module, gulp must be used
in asynchronuous mode (task function has a callback which
is&nbsp;called by `del`).

## 2.2. Build Tasks

No transformation is needed for HTML source file.
It must only be copied into build folder.
For `clean:html` to be invoked before this task, it must be passed
as a dependency.

```js
gulp.task('html', [ 'clean:html' ], function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
```

Piping Sass sources through sass plugin will produce browser-readable CSS.

```js
gulp.task('css', [ 'clean:css' ], function() {
  gulp.src([ 'src/style.scss' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
```

Browserify is not a gulp plugin, so using it is a bit tricky. Browserify's
[bundle method][browserify-bundle] returns compiled JavaScript in form
of&nbsp;a&nbsp;simple text stream. [vinyl-source-stream][vinyl-source-stream]
plugin consumes this text stream and makes an gulp-compatible vinyl stream
out&nbsp;of&nbsp;its content. File name must be provided twice. First time
for browserify, second time to create vinyl object.

[browserify-bundle]: https://github.com/substack/node-browserify#bbundlecb
[vinyl-source-stream]: https://github.com/hughsk/vinyl-source-stream

```js
gulp.task('javascript', [ 'clean:js' ], function() {
  return browserify('src/script.js').bundle()
      .pipe(source('script.js', './src').on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
```

## 2.3. Default Task

Lastly, a task that connects everything.

```js
gulp.task('default', [ 'html', 'css', 'javascript' ]);
```

To invoke default task from the command line just type `gulp`. At this point,
invoking it will not produce anything since no&nbsp;sources are yet written,
but remember to run `gulp` after all sources are in place.

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [3. JavaScript Module][js-module]

[js-module]: 3_script.js.md

