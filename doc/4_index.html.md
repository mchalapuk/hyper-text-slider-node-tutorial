[3. JavaScript Module][js-module] &nbsp;&lt;&nbsp; Previous Page

[js-module]: 3_script.js.md

# 4. HTML Page

To make [hermes][hermes] work via node via [node][node],
3 things are needed in client HTML.

[hermes]: https://github.com/webfront-toolkit/hermes
[node]: https://nodejs.org/en/

```html
<!DOCTYPE html>
<html>
<head>
  <title>Hermes via Node and Browserify</title>
//:: stylesheet :://
</head>
<body>
//:: slider-declaration :://
//:: browserified-script :://
</body>
</html>
```

## 4.1. Stylesheet

Styles for the slider should be linked in `<head>` section (see
[5. Stylesheet][stylesheet]). We'll also use [Google Fonts][gfonts]
to load [Roboto][roboto] into our webpage.

[gfonts]: https://developers.google.com/fonts/
[roboto]: https://fonts.google.com/specimen/Roboto

```html
//== stylesheet ==//

  <link href=//fonts.googleapis.com/css?family=Roboto:regular,thin rel=stylesheet>
  <link href=style.css rel=stylesheet>
```

## 4.2. Slider Declaration

Element with [`hermes-slider`][layout-slider] class name signifies
declaration of a slider.
Hermes' features are enabled by adding other class names on
the slider element.
[`hermes-defaults`][hermes-defaults] is an option group, which enables
most of the features.

This is a minimal configuration, but you can get pretty wild in here
(enable specific [options][option-classes],
set [CSS transitions][transition-class],
or specify [time duration][time-classes] of a slide).
Please consult [Hermes' Declarative API][css-api] for details.

[layout-slider]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-slider
[transition-class]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-transition--sg
[time-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#time-class-names
[option-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#option-class-names
[hermes-defaults]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-defaults
[css-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md

```html
//== slider-declaration ==//

  <div id=my-slider class="hermes-slider hermes-defaults">
    <div id=webpage>
      <p>This is a simple web page...
    </div>
    <div id=slideshow class=hermes-theme--black>
      <p>...which contains a nice
       <a href=https://github.com/webfront-toolkit/hermes>CSS3 Slideshow</a>.
    </div>
    <div id=dependencies class=hermes-theme--black>
      <p>It was built using
        <a href=https://github.com/gulpjs/gulp class=nth1>gulp</a>,
        <a href=https://github.com/substack/node-browserify class=nth2>browserify</a>,
        <a href=https://github.com/sass/sass class=nth3>sass</a>,
        and <a href=https://github.com/webfront-toolkit/hermes class=nth4>hermes</a>.
    </div>
    <div id=more class=hermes-theme--black>
      <p>For more info, check out
       <a href=https://github.com/webfront-toolkit/hermes-node-example>Hermes
       Node Tutorial</a>.
    </div>
  </div>
```

Any direct child of the slider element is treated as a slide
(above code contains 4).
There are no constraints on the contents of&nbsp;a&nbsp;slide.
It can be anything that your target web browser understands
([HTML][html], [SVG][svg] or even [WebGL][webgl]).

[html]: https://www.w3.org/TR/html5/
[svg]: https://www.w3.org/TR/SVG2/
[webgl]: https://www.khronos.org/registry/webgl/specs/1.0/

## 4.3. Browserified Script

Lastly, at the very bottom of the page, we load our browserified script.

```html
//== browserified-script ==//

  <script src=script.js type=text/javascript>
  </script>
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [5. Stylesheet][stylesheet]

[stylesheet]: 5_style.scss.md

