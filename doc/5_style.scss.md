[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import basic [hermes][hermes] styles.

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import 'node_modules/hermes-slider/lib/_hermes.scss';
```

Let's say we would like our slider to fill the page. Slider's `width` and
`height` is `100%` by default, but we need to set body's height and remove
default webpage `margin`.

```sass
body,
html {
  height: 100%;
  margin: 0;
}
```

As no themes or transitions were specified in client HTML, all slides uses
[default theme][theme-classes] and [default transition][transition-classes].

Default theme does not contain any typography styling, so we'll define
font attributes in order to use Roboto font (it was [loaded in our
HTML][html-stylesheet] (previous page).

[default-theme]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#theme-class-names
[default-transition]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#transition-class-names
[html-stylesheet]: 4_index.html.md#41-stylesheet

```sass
body {
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 300;
}
```

> **DISCLAIMER**
>
> It is recomended to declare typography styling in [custom
> themes][custom-themes].

[custom-themes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/custom-themes.md

