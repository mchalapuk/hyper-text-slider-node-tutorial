# 1. Project Setup

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

