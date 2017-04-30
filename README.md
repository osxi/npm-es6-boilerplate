# npm-es6-boilerplate [![Build Status](https://travis-ci.org/osxi/npm-es6-boilerplate.svg)](https://travis-ci.org/osxi/npm-es6-boilerplate) [![devDependency Status](https://david-dm.org/osxi/npm-es6-boilerplate/dev-status.svg)](https://david-dm.org/osxi/npm-es6-boilerplate#info=devDependencies)

[![Greenkeeper badge](https://badges.greenkeeper.io/osxi/npm-es6-boilerplate.svg)](https://greenkeeper.io/)

Boilerplate for NPM packages with Babel 6.x + Mocha + Chai, published as ES5.

## Features

  - Babel 6.x + es2015 preset
  - Browserify + Babelify + Minifyify
  - Mocha + Chai with ES2015 support via `babel-register`
    - Tests are stored in `test/`

## Usage

  - Fork this repo via `git@github.com:osxi/npm-es6-boilerplate.git name-of-your-package`
  - Rename the various mentions of "your-lib-code" to whatever your package is called
  - Tests are stored in `test/` and ran via `npm test`
  - Manipulate `index.js`, storing your individual ES2015 modules in `lib/`
  - `npm run build` to build to `dist/index.js` (the main file as per package.json)
  - Publish to NPM by running `npm publish`

Note: `npm run build` is also triggered from the `prepublish` hook in package.json so you don't have to run `npm run build` manually outside of local testing (for example, if you want to test your build by using `npm install /path/to/your-npm-package` as forked from this repo).
