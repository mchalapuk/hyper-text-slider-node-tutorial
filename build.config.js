'use strict';

/**
 * This project is written in the spirit of literate programming.
 */
var dir = {
  /**
   * Documentation is handwritten.
   */
  doc: 'doc/',

  /**
   * Sources are generated from the documentation.
   */
  src: 'src/',

  /**
   * Vanilla HTML, CSS and JavaScript are built from sources.
   */
  build: 'dist/',
};

var files = {
  config: [
    'build.config.js',
    'gulpfile.js',
  ],
  doc: [
    dir.doc +'*.md',
  ],
  css: [
    dir.src +'*.sass',
  ],
  js: [
    dir.src +'*.js',
  ],
  spec: [
    dir.src +'*.spec.js',
  ],
};

module.exports = {
  dir: dir,
  files: files,
};

/*
  eslint-env node
*/

