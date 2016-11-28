[Home][home] &nbsp;&lt;&nbsp; Previous Page<br>

[home]: /../..

# 0. Introduction

This is a tutorial on using [HyperText Slider][slider] via [Node][node] and [Browserify][browserify].
Source code examples used in here make up a complete project of&nbsp;a&nbsp;single webpage
containing a nice slideshow. All examples were extracted from the tutorial to provide
executable form of&nbsp;the project (check out [1. Project Setup][setup] for details).

## 0.1. Prerequisites

Following tools will be used throughout the project:

 * [bash][bash] as system shell,
 * [wget][wget] as download utility,
 * [npm][npm] for dependency management,
 * [gulp][gulp] as a build system,
 * [browserify][browserify] to make [node][node] modules work in the browser,
 * [sass][sass] as a preprocessor for [css][css],
 * [hyper-text-slider][slider] to implement a slideshow on a webpage.

[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[wget]: https://www.gnu.org/software/wget/
[npm]: https://docs.npmjs.com/getting-started/what-is-npm
[gulp]: https://github.com/gulpjs/gulp
[browserify]: https://github.com/substack/node-browserify
[node]: https://nodejs.org/en/
[sass]: https://github.com/sass/sass
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[slider]: https://github.com/muroc/hyper-text-slider

## 0.2. Meta-information

This tutorial contains information on:

 * Setting up a font-end project using node,
 * Configuring browserify and sass with gulp,
 * Writing HTML webpage containing HyperText Slider,
 * Configuring slide themes,
 * Writing JavaScript module that loads HyperText Slider,
 * Importing slider's CSS stylesheets,
 * Adding your own CSS to a slider,
 * Styling individual slides,
 * Preventing [FOUC][fouc].

[fouc]: https://en.wikipedia.org/wiki/Flash_of_unstyled_content

And does not contain information on:

 * Using specific slider options (see [Declarative API Reference][declarative-api]),
 * Configuring transitions globally (see [Declarative API Reference][declarative-api]),
 * Configuring transitions for individual slides (see [Declarative API Reference][declarative-api]),
 * Writing custom transitions (!link needed!),
 * Writing custom themes (see [Custom Themes Guide][custom-themes]),
 * Preloading background images.

[declarative-api]: https://github.com/muroc/hyper-text-slider/blob/master/doc/class-names.md
[custom-themes]: https://github.com/muroc/hyper-text-slider/blob/master/doc/custom-themes.md

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [1. Project Setup][setup]

[setup]: 1_setup.sh.md
