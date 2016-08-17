[3. JavaScript Module][js-module] &nbsp;&lt;&nbsp; Previous Page

[js-module]: 3_script.js.md

# 4. HTML Page

Normal structure of a web page. Nothing fancy here...

```html
<!DOCTYPE html>
<html>
<head>
//:: head :://
</head>
<body>
//:: slider :://
//:: script :://
</body>
</html>
```

## 4.1. Head

`<head>` section contains a link to `style.css` file.

```html
//== head ==//
  <title>Hermes via Node and Browserify</title>
  <link href=style.css rel=stylesheet type=text/css>
```

## 4.2. Body

Element with [`hermes-slider`][layout-slider] class name signifies
a declaration of a slider.
Features of hermes are enabled by adding other class names in here.
[`hermes-defaults`][hermes-defaults] enables most of the features.
Many other options can be specified by setting class names on a slider
(e.g. [CSS transitions][transition-class] or [slide duration][time-classes],
please consult [Hermes' Declarative API][css-api] for details).

[layout-slider]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-slider
[transition-class]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-transition--sg
[time-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#time-class-names
[hermes-defaults]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-defaults
[css-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md

```html
//== slider ==//
  <div id=my-slider class="hermes-slider hermes-defaults">
//:: slides :://
  </div>
```

Any direct child of slider element is treated as a slide.
There are no constraints on the contents of a slide. It can be anything
that your target web browser understands ([HTML][html], [SVG][svg]
or even [WebGL][webgl]).

[html]: https://www.w3.org/TR/html5/
[svg]: https://www.w3.org/TR/SVG2/
[webgl]: https://www.khronos.org/registry/webgl/specs/1.0/

```html
//== slides ==//
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
```

Lastly, our browserified script. It could also be placed in the head section,
but page may render a little faster this way.

```html
//== script ==//
  <script src=script.js type=text/javascript>
  </script>
```

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [5. Stylesheet][stylesheet]

[stylesheet]: 5_style.scss.md

