[0. Introduction][introduction] &nbsp;&lt;&nbsp; Previous Page

[introduction]: 0_introduction.markdown

# 1. Project Setup

## 1.1. Dependencies

Use [npm][npm] to install [gulp][gulp], [browserify][browserify], [sass][sass],
and [hermes][hermes].

[npm]: https://docs.npmjs.com/getting-started/what-is-npm
[gulp]: https://github.com/gulpjs/gulp
[browserify]: https://github.com/substack/node-browserify
[sass]: https://github.com/sass/sass
[hermes]: https://github.com/webfront-toolkit/hermes

```sh
# Initialize the project, if you haven't done that already.
npm init

# Get the goodies
npm install gulp --save-dev
npm install gulp-util --save-dev
npm install browserify --save-dev
npm install vinyl-source-stream --save-dev
npm install gulp-sass --save-dev
npm install hermes-slider --save-dev
```

Properly configured gulp (more on that later) will invoke browserify to compile
JavaScript sources (which uses node modules) and sass module to compile
Sass sources. Compilation will produce JavaScript and CSS code that can be run
in a web browser.

## 1.2. Directory structure

Project consists of following folders:

 * `src` - containing source code presented in this tutorial (input files
  for [gulp][gulp]).
 * `dist` - containing vanilla HTML, CSS and JavaScript, which can be
  run in a web browser (gulp output files).

```sh
# Create project folders.
mkdir src dist
```

Next Page &nbsp;&gt;&nbsp; [2. Build Configuration][gulpfile]

[gulpfile]: 2_gulpfile.js.md

