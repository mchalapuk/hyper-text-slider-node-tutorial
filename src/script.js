'use strict';

require('hermes-slider/lib/polyfills');
var hermes = require('hermes-slider');

window.addEventListener('load', function() {
  hermes.boot(document.body);
});
window.WebFontConfig = {
  google: { families: [ 'Roboto:thin' ] },
};

(function() {
  var wfs = document.createElement('script');
  wfs.src = (document.location.protocol === 'https:'? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  wfs.type = 'text/javascript';
  wfs.async = 'true';

  var script = document.getElementsByTagName('script')[0];
  script.parentNode.insertBefore(wfs, script);
}());
