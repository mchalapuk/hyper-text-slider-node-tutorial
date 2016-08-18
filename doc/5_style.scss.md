[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import basic [hermes][hermes] styles.

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import 'node_modules/hermes-slider/lib/_hermes.scss';
```

Let's say we would like our slider to fill the page. Sliders `width` and
`height` is `100%` by default, but we need to set body's height and remove
default webpage margin.

```sass
body,
html {
  height: 100%;
  margin: 0;
}
```

Roboto font is loaded from Google Fonts.

```sass
body {
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 300;
}
```

