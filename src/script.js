'use strict';

require('hermes-slider/lib/polyfills');
var hermes = require('hermes-slider');

window.addEventListener('load', function() {
  hermes.boot(document.body);
});
