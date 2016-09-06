[2. Build Configuration][build-config] &nbsp;&lt;&nbsp; Previous Page

[build-config]: 2_gulpfile.js.md

# 3. JavaScript Module

[Hermes' scripting API][js-api] is quite rich, but all we need is upgrading
the slider, which will be declared on our web page.

[js-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md

```js
'use strict';

require('hermes-slider/lib/polyfills');
var hermes = require('hermes-slider');

window.addEventListener('load', function() {
  hermes.boot(document.body);
});
```

Above script loads [hermes][hermes] module and call [boot function][boot]
after page loads.

[hermes]: https://github.com/webfront-toolkit/hermes
[boot]: https://github.com/webfront-toolkit/hermes/blob/master/doc/javascript-api.md#bootcontainerelement

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [4. HTML Page][html-page]

[html-page]: 4_index.html.md

