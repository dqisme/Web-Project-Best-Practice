# Web Project Best Practice

[Relationship](http://www.nomnoml.com/#view/%2F%2F%20Entities%0A%5Bbabel%5D%0A%5Bbabelify%5D%0A%5Bbrowserify%5D%0A%5Bwebpack%5D%0A%5Bwebpack%20with%20configuration%5D%0A%5Bhtml-webpack-plugin%5D%0A%5Bjshint%5D%0A%0A%2F%2F%20Relationship%0A%5Bbabelify%5D-%3E%5Bbabel%5D%0A%5Bbabelify%5D-%3E%5Bbrowserify%5D%0A%5Bhtml-webpack-plugin%5D-%3E%5Bwebpack%20with%20configuration%5D%0A%5Bwebpack%20with%20configuration%5D-%3E%5Bwebpack%5D)

- `browserify`
- ES6 with `babel`
- `babelify` (depends on `browserify` and `babel` preset)
- `webpack`
- `webpack` with configuration
- `webpack` plugin - `html-webpack-plugin`

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
