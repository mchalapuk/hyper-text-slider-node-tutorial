[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import basic [hermes][hermes] styles
(we may want to overwrite some of them later).

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import 'node_modules/hermes-slider/lib/_hermes.scss';
```
## 5.1. Global Styles

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
  text-shadow: #333 1px 1px 1px;
}
```

> **NOTE**
>
> Global typography styles are applicable when the same base font is
> used in the slider and the rest of the webpage. More complicated cases
> (e.g. multiple fonts used throughout the slideshow) require usage
> of [custom themes][custom-themes].

[custom-themes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/custom-themes.md

## 5.2. Styling Specific Slides

The most common styling of an individual slide is setting its background.
Let's do that.

```sass
#slideshow {
  .hermes-layout--background {
    background-image: url('big-ben.jpg');
  }
}
#dependencies {
  .hermes-layout--background {
    background-image: url('css-on-macbook-pro.jpg');
  }
}
#more {
  .hermes-layout--background {
    background-image: url('keyboard.jpg');
  }
}
```

First slide has no background image, only white background from default theme.
This will make transition to second slide more impressive.
By default, slide backgrounds are [centered][background-position] without
[repeat][background-repeat] and with [cover][background-size]. In most cases,
setting [`background-image`][background-image] is enough.

[background-position]: https://www.w3.org/TR/css3-background/#the-background-position
[background-repeat]: https://www.w3.org/TR/css3-background/#the-background-repeat
[background-size]: https://www.w3.org/TR/css3-background/#the-background-size
[background-image]: https://www.w3.org/TR/css3-background/#the-background-image

```sass
$pattern: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAADklEQVQIW2NgQAXGZHAAGioAza6+Hk0AAAAASUVORK5CYII=";

#slideshow,
#dependencies,
#more {
  .hermes-layout--background::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: transparent url($pattern) center center repeat;
  }
}
```

When slide becomes active, slider adds [`hermes-slide-to`][slide-to] class
on it. Using this class as a part of CSS selector is very handy in cases when
styled slide contains animations or transitions (they will be started each
time slide becomes visible).

[slide-to]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#hermes-slide-to

```sass
@keyframes blink {
  0% { color: #222; }
  100% { color: #aa2; }
}
#dependencies.hermes-slide-to {
  a {
    animation-name: blink;
    animation-timing-function: ease-in-out;
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }

  .nth4 {
    animation-duration: 400ms;
  }
  @for $i from 1 through 4 {
    .nth#{$i} {
      animation-delay: 1.5s + 80ms * $i;
    }
  }
}
```

Above code makes all links on `#dependencies` slide blink with yellow color, one
after another. Christmas lights (kind of) effect. Let's make the link on last
slide permanently yellow.

```sass
#more.slide-to {
  a {
    color: #aa2;
  }
}
```

