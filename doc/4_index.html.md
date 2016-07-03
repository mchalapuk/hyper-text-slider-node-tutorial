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

Declaration of a slider is an element with
[`hermes-layout--slider`][layout-slider] class name.
[Transition class name][transition-class] present on the slider element tells
the slider which transition to use as default (if transition isn't specified
on slide element).
Features of hermes are enabled by adding other class names in here.
[`hermes-defaults`][hermes-defaults] enables most of the features (please
consult [Hermes' Declarative API][css-api] for details).

[layout-slider]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-layout--slider
[transition-class]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-transition--sg
[hermes-defaults]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-defaults
[css-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md

```html
//== slider ==//
  <div class="hermes-layout--slider
              hermes-transition--zoom-in-out
              hermes-defaults">
//:: slides :://
  </div>
```

Each slide must have [hermes-layout--slide][layout-slide] class name.
Contents of the slide is just any HTML.

[layout-slide]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-layout--slide

```html
//== slides ==//
    <div class="hermes-layout--slide" id=example>
      <p>This is a simple example of a web page containing
      <h1>
       <a href=https://github.com/webfront-toolkit/hermes>Hermes CSS3 Slideshow</a>
      </h1>
    </div>
    <div class="hermes-layout--slide" id="dependencies">
      <p>It was built using:
      <ul>
        <li><a href=https://github.com/gulpjs/gulp>gulp</a>
        <li><a href=https://github.com/substack/node-browserify>browserify</a>
        <li><a href=https://github.com/sass/sass>sass</a>
      <ul>
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

