# 1. Project Setup

Things used in this tutorial:

 * [bash][bash] as system shell,
 * [npm][npm] for dependency management,
 * [gulp][gulp] as a build system,
 * [browserify][browserify] to make [node][node] modules work in the browser,
 * [sass][sass] as a preprocessor for [css][css],
 * [hermes][hermes] to implement a slideshow on a webpage.

[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[npm]: https://docs.npmjs.com/getting-started/what-is-npm
[gulp]: https://github.com/gulpjs/gulp
[browserify]: https://github.com/substack/node-browserify
[node]: https://nodejs.org/en/
[sass]: https://github.com/sass/sass
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[hermes]: https://github.com/webfront-toolkit/hermes

## 1.1. Directory structure

Project consists of following folders:

 * `src` - containing executable form of source code presented in this
   tutorial (input files for gulp build).
 * `dist` - containing compiled vanilla HTML, CSS and JavaScript, which can be
  run in a web browser (output files).

```sh
# Create project folders.
mkdir src dist
```

## 1.2. Dependencies

Use [npm][npm] to get [gulp][gulp], [browserify][browserify], [sass][sass],
and [hermes][hermes].

```sh
# Initialize the project, if you haven't done that already.
npm init

# Get the goodies
npm install gulp --save-dev
npm install gulp-browserify --save-dev
npm install gulp-sass --save-dev
npm install hermes-slider --save-dev
```

Dependencies are installed for development, because they will be used only
during gulp build, not during runtime in the browser.

