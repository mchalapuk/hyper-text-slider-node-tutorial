[Home][home] &nbsp;&lt;&nbsp; Previous Page<br>

[home]: /../..

# 0. Introduction

This is a tutorial on using [hermes][hermes] via [node][node] and [browserify][browserify].
Source code examples used in here make up a complete project of&nbsp;a&nbsp;single webpage
containing a nice slideshow. All examples were extracted from the tutorial to provide
executable form of&nbsp;the project (check out [1. Project Setup][setup] for details).

## 0.1. Prerequisites

Following tools will be used throughout the project:

 * [bash][bash] as system shell,
 * [npm][npm] for dependency management,
 * [gulp][gulp] as a build system,
 * [browserify][browserify] to make [node][node] modules work in the browser,
 * [sass][sass] as a preprocessor for [css][css],
 * [hermes][hermes] to implement a slideshow on a webpage.

[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[npm]: https://docs.npmjs.com/getting-started/what-is-npm
[gulp]: https://github.com/gulpjs/gulp
[browserify]: https://github.com/substack/node-browserify
[node]: https://nodejs.org/en/
[sass]: https://github.com/sass/sass
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[hermes]: https://github.com/webfront-toolkit/hermes

## 0.2. Meta-information

This tutorial contains information on:

 * Setting up a font-end project using node,
 * Configuring browserify and sass with gulp,
 * Writing HTML webpage containing hermes slider,
 * Configuring slide themes,
 * Writing JavaScript module that loads hermes,
 * Importing hermes' CSS stylesheets,
 * Adding your own CSS to hermes slider,
 * Styling individual slides.

And does not contain information on:

 * Using specific slider options (see [Declarative API Reference][declarative-api]),
 * Configuring transitions globally (see [Declarative API Reference][declarative-api]),
 * Configuring transitions for individual slides (see [Declarative API Reference][declarative-api]),
 * Writing custom transitions (!link needed!),
 * Writing custom themes (see [Custom Themes Guide][custom-themes]).

[declarative-api]: https://github.com/webfront-toolkit/hermes/blob/master/doc/class-names.md
[custom-themes]: https://github.com/webfront-toolkit/hermes/blob/master/doc/custom-themes.md

&nbsp;<br>
Next Page &nbsp;&gt;&nbsp; [1. Project Setup][setup]

[setup]: 1_setup.sh.md
