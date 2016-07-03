[2. Build Configuration][build-config] &nbsp;&lt;&nbsp; Previous Page

[build-config]: 2_gulpfile.js.md

# JavaScript Module

[Hermes' scripting API][js-api] is quite rich, but all we need is upgrading a
slider, which will be declared on out web page.

[js-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md

Our script will just load [hermes][hermes] module...

[hermes]: https://github.com/webfront-toolkit/hermes

```js
var hermes = require('hermes-slider');
```

... and call [boot function][boot] after page loads.

[boot]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md#bootcontainerelement

```js
window.addEventListener('load', function() {
  hermes.boot(document.body);
});
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [4. HTML Page][html-page]

[html-page]: 4_index.html.md

