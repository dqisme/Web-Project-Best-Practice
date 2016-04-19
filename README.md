# Web Project Best Practice

[Relationship](https://www.mindomo.com/mindmap/5f2c938a5392487ab53cb3a8dcb1b8d3)

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