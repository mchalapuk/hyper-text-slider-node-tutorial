'use strict';

require('hyper-text-slider/lib/polyfills');
var htSlider = require('hyper-text-slider');

window.addEventListener('load', function() {
  htSlider.boot(document.body);
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
document.documentElement.classList.add('js');
