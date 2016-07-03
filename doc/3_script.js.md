[2. Build Configuration][build-config] &nbsp;&lt;&nbsp; Previous Page

[build-config]: 2_gulpfile.js.md

# JavaScript Module

[Hermes scriptiong API][js-api] is quite rich, but all we need is to upgrade a
slider declared on the page.

[js-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md

The script will just load [hermes][hermes] module...

[hermes]: https://github.com/webfront-toolkit/hermes

```js
var hermes = require('hermes-slider');
```

... and call [hermes.boot(containerElement)][boot] after page loads.

```js
window.addEventListener('load', function() {
  hermes.boot(document.body);
});
```

Thats it.

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [4. HTML Page][html-page]

[html-page]: 3_index.html.md

