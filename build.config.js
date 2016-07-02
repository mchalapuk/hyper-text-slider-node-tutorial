'use strict';

var dir = {
  doc: 'doc/',
  src: 'src/',
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

