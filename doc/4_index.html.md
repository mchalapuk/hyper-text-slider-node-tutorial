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

Styles for the slider should be linked in `<head>` section (see [5. Stylesheet][stylesheet]).

```html
//== stylesheet ==//
  <link href=style.css rel=stylesheet type=text/css>
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
    <div id=example>
      <p>This is a simple example of a web page containing
      <h1>
        <a href=https://github.com/webfront-toolkit/hermes>Hermes CSS3 Slideshow</a>
      </h1>
    </div>
    <div id=dependencies>
      <p>It was built using:
      <ul>
        <li><a href=https://github.com/gulpjs/gulp>gulp</a>
        <li><a href=https://github.com/substack/node-browserify>browserify</a>
        <li><a href=https://github.com/sass/sass>sass</a>
      </div>
    </div>
  </div>
```

Any direct child of slider element is treated as a slide.
There are no constraints on the contents of a slide. It can be anything
that your target web browser understands ([HTML][html], [SVG][svg]
or even [WebGL][webgl]).

[html]: https://www.w3.org/TR/html5/
[svg]: https://www.w3.org/TR/SVG2/
[webgl]: https://www.khronos.org/registry/webgl/specs/1.0/

## 4.3. Browserified Script

Lastly, our browserified script. It could also be placed in the head section,
but page may render a little faster this way.

```html
//== browserified-script ==//
  <script src=script.js type=text/javascript>
  </script>
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [5. Stylesheet][stylesheet]

[stylesheet]: 5_style.scss.md

