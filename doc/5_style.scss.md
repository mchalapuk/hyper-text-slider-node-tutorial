[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import basic [hermes][hermes] styles
(we may want to overwrite some of them later).

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import 'node_modules/hermes-slider/lib/_hermes.scss';
```

In order for the slider to fill the whole page, `<body>`'s `height` must
be set to `100%` and default webpage `margin` must be removed (slider's
`width` and `height` is `100%` by default).

```sass
body,
html {
  height: 100%;
  margin: 0;
}
```

As no themes or transitions were specified in client HTML, all slides use
[default theme][theme-classes] and [default transition][transition-classes].

Default theme does not contain any typography styling. To use Roboto font,
which was [loaded in the`<head>` section of our webpage][html-stylesheet],
`font-family` must be set.

[theme-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#theme-class-names
[transition-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#transition-class-names
[html-stylesheet]: 4_index.html.md#41-stylesheet

```sass
body {
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 300;
}
```

> **NOTE**
>
> Global typography styles are applicable when the same base font is
> used in the slider and the rest of the webpage. More complicated cases
> (e.g. multiple fonts used throughout the slideshow) require usage
> of [custom themes][custom-themes].

[custom-themes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/custom-themes.md
