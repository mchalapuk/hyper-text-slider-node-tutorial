[4. HTML Page][html-page] &nbsp;&lt;&nbsp; Previous Page

[html-page]: 4_index.html.md

# 5. Stylesheet

Before doing any styling, we need to import basic [hermes][hermes] styles
(we may want to overwrite some of them later).

[hermes]: https://github.com/webfront-toolkit/hermes

```sass
@import 'node_modules/hermes-slider/lib/_hermes.scss';
```

## 5.1. Slider Size

By default, slider has height of `100%`. Full HD slider looks cool, but it may
be too heavy for machines without good GPU acceleration in the browser.

First things first. Let's turn off `<body>`'s annoying default margin.

```sass
body,
html {
  height: 100%;
  margin: 0;
}
```
We would like our slider to fill the page on small screens.

```sass
#my-slider {
  height: 100%;
}
```

And have height of 600px on bigger screens.

```sass
@media only screen and (min-height: 600px) {
  #my-slider {
    height: 600px;
    top: calc(50% - 300px);
    position: absolute;
  }
}
```

## 5.2. Typography

[`hermes-theme--white`][theme-classes] and [`hermes-theme--black`][theme-classes]
do not contain any typography styling. In order to use Roboto font,
which was [loaded in the our script][loading-fonts], `font-family` must be set.

[theme-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#theme-class-names
[transition-classes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md#transition-class-names
[loading-fonts]: 3_script.js.md#33-loading-fonts

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

## 5.3. Backgrounds

The most common styling of an individual slide is setting its background.
Let's do that.

```sass
#slideshow {
  .hermes-layout--background {
    background-image: url('images/big-ben.jpg');
  }
}
#dependencies {
  .hermes-layout--background {
    background-image: url('images/css-on-macbook-pro.jpg');
  }
}
#more {
  .hermes-layout--background {
    background-image: url('images/keyboard.jpg');
  }
}
```


First slide has no background image, only white background from default theme.
This will make transition to second slide more impressive.
By default, slide backgrounds are [centered][background-position] without
[repeat][background-repeat] and with [cover][background-size].
[`hermes-theme--black`][theme-classes] also adds an&nbsp;overlay which
darkens the background.
In most cases, setting [`background-image`][background-image] is enough
to make things look good.

Page background color shouldn't be left default, because it will be white
or gray depending on the browser at use.
Let's use some nice dark purpleish color for that.

```sass
body {
  background-color: #222125;
}
```

[background-position]: https://www.w3.org/TR/css3-background/#the-background-position
[background-repeat]: https://www.w3.org/TR/css3-background/#the-background-repeat
[background-size]: https://www.w3.org/TR/css3-background/#the-background-size
[background-image]: https://www.w3.org/TR/css3-background/#the-background-image

## 5.4. In-slide Animations

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
after another. Christmas lights (kind of) effect. Let's make links on second and
last slide permanently yellow.

```sass
#slideshow,
#more {
  a {
    &:link,
    &:visited {
      color: #aa2;
    }
  }
}
```

## 5.5. Page Visibility

We styled the page to be invisible [in the `<head>` section][head-styles].
Out script [adds `js` class name to `<html>` element][dealing-with-fouc].
Last thing to&nbsp;do&nbsp;is to make the page visible in CSS.

[head-styles]: 4_index.html.md#41-stylesheet
[dealing-with-fouc]: 3_script.js.md#34-dealing-with-fouc

```sass
html {
  transition: opacity 300ms ease-in;
}
html.js {
  opacity: 1;
}
```

**Congratulations! You have finished the tutorial.**

Remember to compile all sources with `gulp`
(see [2.3. Default Task][gulpfile] for details).

[gulpfile]: 2_gulpfile.js.md#23-default-task

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [6. Result][result]

[result]: https://webfront-toolkit.github.io/hermes-node-example

