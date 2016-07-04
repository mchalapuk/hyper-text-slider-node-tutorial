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
  setup: [
    'setup.sh',
  ],
  config: [
    '.writ.config.js',
    '.writ.gulpfile.js',
    'gulpfile.js',
  ],
  doc: [
    dir.doc +'*.md',
  ],
  css: [
    dir.src +'*.scss',
  ],
  js: [
    dir.src +'*.js',
  ],
};

module.exports = {
  dir: dir,
  files: files,
};

/*
  eslint-env node
*/

