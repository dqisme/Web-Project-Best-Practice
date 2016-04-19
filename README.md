# Web Project Best Practice

[Relationship](http://www.nomnoml.com/#view/%2F%2F%20Entities%0A%5Bbabel%5D%0A%5Bbabelify%5D%0A%5Bbrowserify%5D%0A%5Bwebpack%5D%0A%5Bwebpack%20with%20configuration%5D%0A%5Bhtml-webpack-plugin%5D%0A%0A%2F%2F%20Relationship%0A%5Bbabelify%5D-%3E%5Bbabel%5D%0A%5Bbabelify%5D-%3E%5Bbrowserify%5D%0A%5Bhtml-webpack-plugin%5D-%3E%5Bwebpack%20with%20configuration%5D%0A%5Bwebpack%20with%20configuration%5D-%3E%5Bwebpack%5D)

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

`./node_modules/.bin/browserify main.js -o bundle.js`

#### output

- bundle.js

### ES6 with babel

#### babel installing

`npm install --save-dev babel-cli babel-preset-es2015`

#### usage

`./node_modules/.bin/babel es6example.js -o es6example_babelified.js`

#### output

- es6example_babelified.js_

### babelify

#### installing

`npm install --save-dev babelify`

#### usage

`./node_modules/.bin/browserify main.js -o bundle.js -t [babelify --presets [ es2015 ] ]`

#### output

- bundle.js

### webpack

#### installing

`npm install --save-dev webpack`

#### usage

`./node_modules/.bin/webpack main.js bundle_webpack.js`

#### output bundle_webpack.js

### webpack with configuration

#### dependencies

- webpack.config.js

#### usage

`./node_modules/.bin/webpack`

### webpack plugin - html-webpack-plugin

#### installing

`npm install --save-dev html-webpack-plugin`

#### dependencies

- webpack.config.js

#### usage

`./node_modules/.bin/webpack`

#### output

- index.html