[2. Build Configuration][build-config] &nbsp;&lt;&nbsp; Previous Page

[build-config]: 2_gulpfile.js.md

# 3. JavaScript Module

## 3.1. Polyfills

In order to support older browsers, polyfills that enable technologied required
by hermes must be loaded. If you don't use any polyfill loader in your project,
use `polyfills.js` file provided by hermes.

```js
'use strict';

require('hermes-slider/lib/polyfills');
```

## 3.2. Booting Hermes

[Hermes' scripting API][js-api] is quite rich, but all we need is upgrading
the slider, which will be declared on our web page.

[js-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md

```js
var hermes = require('hermes-slider');

window.addEventListener('load', function() {
  hermes.boot(document.body);
});
```

Above script loads [hermes][hermes] module and call [boot function][boot]
after page loads.

[hermes]: https://github.com/webfront-toolkit/hermes
[boot]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md#bootcontainerelement

## 3.3. Loading Fonts

We'll also use [Google Fonts][gfonts] to load [Roboto][roboto] into our webpage.

[gfonts]: https://developers.google.com/fonts/
[roboto]: https://fonts.google.com/specimen/Roboto

```js
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
```

## 3.4. Dealing with FOUC

As resources loaded by our web page are quite heavy (CSS, JavaScipt and images),
flash of unstyled content ([FOUC][fouc]) may occur.
To deal with this problem we will add `js` class name on `<html>` element.
This class will be styled in CSS (see [5.5. Page Visibility][page-visibility]).

[fouc]: https://en.wikipedia.org/wiki/Flash_of_unstyled_content
[page-visibility]: 5_style.css.md#55-page-visibility

```js
document.documentElement.classList.add('js');
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [4. HTML Page][html-page]

[html-page]: 4_index.html.md

