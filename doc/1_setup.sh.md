[0. Introduction][introduction] &nbsp;&lt;&nbsp; Previous Page

[introduction]: 0_introduction.markdown

# 1. Project Setup

## 1.1. Dependencies

Use [npm][npm] to install [gulp][gulp], [browserify][browserify], [sass][sass],
[del][del], and [hyper-text-slider][slider].

[npm]: https://docs.npmjs.com/getting-started/what-is-npm
[gulp]: https://github.com/gulpjs/gulp
[browserify]: https://github.com/substack/node-browserify
[sass]: https://github.com/sass/sass
[del]: https://github.com/sindresorhus/del
[slider]: https://github.com/muroc/hyper-text-slider

```sh
# Initialize the project, if you haven't done that already.
npm init

# Get the goodies
npm install gulp --save-dev
npm install gulp-util --save-dev
npm install browserify --save-dev
npm install vinyl-source-stream --save-dev
npm install gulp-sass --save-dev
npm install hyper-text-slider --save-dev
npm install del --save-dev
```

Properly configured gulp (more on that later) will invoke browserify to compile
JavaScript sources and sass module to&nbsp;compile Sass sources.
Compilation will produce JavaScript and CSS code that can be run
in a web browser.

## 1.2. Directory structure

Project consists of following folders:

 * `src` - containing source code presented in this tutorial (input files
  for [gulp][gulp]).
 * `dist` - containing vanilla HTML, CSS and JavaScript, which can be
  run in a web browser (gulp output files).
 * `dist/images` - containing JPG files used as slide background images.

```sh
# Create project folders.
mkdir -p src dist/images
```

## 1.3. Image Resources

Use [wget][wget] to download image files that will be used as backgrounds.

[wget]: https://www.gnu.org/software/wget/

```sh
# Download image files
cd dist/images
wget https://muroc.github.io/hyper-text-slider-node-tutorial/dist/images/big-ben.jpg
wget https://muroc.github.io/hyper-text-slider-node-tutorial/dist/images/css-on-macbook-pro.jpg
wget https://muroc.github.io/hyper-text-slider-node-tutorial/dist/images/keyboard.jpg
cd -
```

<br>
Next Page &nbsp;&gt;&nbsp; [2. Build Configuration](2_gulpfile.js.md)


