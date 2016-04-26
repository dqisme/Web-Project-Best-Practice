# Web Project Best Practice

- `browserify`
- ES6 with `babel`
- `babelify` (depends on `browserify` and `babel` preset)
- `webpack`
- `webpack` with configuration
- `webpack` plugin - `html-webpack-plugin`
- `jslint`
- `eslint`
- `LESS`
- `SCSS`
- `scss-lint`
- `mocha`
- `chai`

### browserify

#### installing

`npm install --save-dev browserify`

#### usage

`./node_modules/.bin/browserify ./src/main.js -o ./dist/bundle_browserified.js`

#### output

- `bundle_browserified.js`

### ES6 with babel

#### babel installing

`npm install --save-dev babel-cli babel-preset-es2015`

#### dependencies

- .babelrc

#### usage

`./node_modules/.bin/babel ./src/es6example.js -o ./dist/es6example_babeled.js`

#### output

- `es6example_babeled.js`

### babelify

#### installing

`npm install --save-dev babelify`

#### usage

`./node_modules/.bin/browserify ./src/main.js -o ./dist/bundle_babelified.js -t [babelify --presets [ es2015 ] ]`

#### output

- `bundle_babelified.js`

### webpack

#### installing

`npm install --save-dev webpack`

#### dependencies

- `webpack.config.js`

#### usage

`./node_modules/.bin/webpack`

#### output

- `bundle_webpacked.js`

### webpack plugin - html-webpack-plugin

#### installing

`npm install --save-dev html-webpack-plugin`

#### dependencies

- `webpack.config.js`

#### usage

`./node_modules/.bin/webpack`

#### output

- `index_htmlwebpackplugin.html`

### jshint

#### code style

- [Airbnb](https://github.com/airbnb/javascript)

#### installing

`npm install --save-dev jshint`

#### dependencies

- `.jshintrc`

#### usage

`./node_modules/.bin/jshint ./src/es6example.js`

### eslint

#### code style

- [Airbnb](https://github.com/airbnb/javascript)

#### installing

`npm install --save-dev eslint eslint-config-airbnb babel-eslint eslint-plugin-react eslint-plugin-jsx-a11y`

#### dependencies

- `.eslintrc`
- `.eslintignore`

#### usage

`./node_modules/.bin/eslint ./src/es6example.js`

### LESS

#### installing

`npm install --save-dev less`

#### usage

`./node_modules/.bin/lessc ./src/style.less ./dist/style.css`

### SCSS

#### environment
- ruby
- gem

#### installing

`gem install scss`

#### usage

`scss ./src/style.scss ./dist/style_scss.css --sourcemap=none`

### scss-lint

#### environment
- ruby
- gem
- SCSS

#### installing

 `gem install scss_lint`

#### dependencies

- .scss-lint.yml

#### usage

`scss-lint ./src/style.scss`

### mocha

#### installing

`npm install --save-dev mocha`

#### dependency

- `./test`

#### usage

`./node_modules/.bin/mocha`

### chai

#### installing

`npm install --save-dev chai`

#### usage

~~~ JavaScript
var assert = require('chai').assert;
~~~

