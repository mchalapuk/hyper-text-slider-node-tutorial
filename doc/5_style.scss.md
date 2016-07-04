[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import styles of [hermes][hermes] and
a definition of the transition, which is used on our page.

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import
  'node_modules/hermes-slider/src/_hermes.scss',
  'node_modules/hermes-slider/src/sass/transitions/_zoom-in-out.scss';
```

```sass
body,
html,
#my-slider {
  height: 100%;
  margin: 0;
}
```

