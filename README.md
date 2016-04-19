# Web Project Best Practice

- `browserify`
- ES6 with `babel`
- `babelify` (depends on `browserify` and `babel` preset)

### browserify

#### installing

`npm install --save-dev browserify`

#### usage

`./node_modules/.bin/browserify main.js -o bundle.js`

### ES6 with babel

#### babel installing

`npm install --save-dev babel-cli babel-preset-es2015`

#### usage

`./node_modules/.bin/babel es6example.js -o es6example_babelified.js`

### babelify

#### installing

`npm install --save-dev babelify`

#### usage

`./node_modules/.bin/browserify main.js -o bundle.js -t [babelify --presets [ es2015 ] ]`

### webpack

#### installing

`npm install --save-dev webpack`

#### usage

`./node_modules/.bin/webpack main.js bundle_webpack.js`

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