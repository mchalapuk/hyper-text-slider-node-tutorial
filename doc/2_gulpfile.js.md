[1. Project Setup][setup] &nbsp;&lt;&nbsp; Previous Page

[setup]: 1_setup.sh.md

# Build Configuration

By default, [gulp][gulp] searches for `Gulpfile.js` from which it reads task
definitions for the build.

[gulp]: https://github.com/gulpjs/gulp

## Gulpfile.js

By convention, all node files should contain require calls at the top. We need
gulp for IO and to create task definitions, and plugins for
[browserify][browserify] and [sass][sass].

[browserify]: https://github.com/substack/node-browserify
[sass]: https://github.com/sass/sass

```js
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var sass = require('gulp-sass');
```

Each type of compilation is done in separate gulp task, which is essentially
a [pipeline][pipeline]. Data that flows in this pipeline is typically a
sourcecode, which gets transformed by gulp plugins.

[pipeline]: https://en.wikipedia.org/wiki/Pipeline_(software)

Piping JavaScript sources to browserify plugin will produce vanilla JavaScript
which can be executed in a browser.

```js
gulp.task('javascript', function() {
  gulp.src([ 'src/script.js' ])
      .pipe(browserify().bundle().on('error', gutil.log))
      .pipe(gulp.dest('dist/'))
  ;
});
```

Piping Sass sources to sass plugin will produce browser-readable CSS.

```js
gulp.task('css', function() {
  gulp.src([ 'src/style.sass' ])
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
  ;
});
```

No transformation is needed for HTML sources, as it will be plain HTML. It will
only be copied into build folder.

```js
gulp.task('html', function() {
  gulp.src([ 'src/index.html' ])
      .pipe(gulp.dest('dist/'))
  ;
});
```

Lastly, a default gulp task will connect everything.

```js
gulp.task('default', [ 'html', 'css', 'javascript' ]);
```

Next Page &nbsp;&gt;&nbsp; [3. HTML Page][html-page]

[html-page]: 3_index.html.md

