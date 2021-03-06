# Web Project Best Practice

- [browserify](#browserify)
- [ES6 with babel](#ES6-with-babel)
- [babelify](#babelify)
- [webpack](#webpack)
- [html-webpack-plugin](#html-webpack-plugin)
- [jshint](#jshint)
- [eslint](#eslint)
- [LESS](#less)
- [SCSS](#scss)
- [scss-lint](#scss-lint)
- [mocha](#mocha)
- [chai](#chai)
- [mocha with babel](#mocha-with-babel)
- [istanbul@1.0.0-alpha.2](#istanbul100-alpha2)
- [selenium-webdriver](#selenium-webdriver)

## browserify

### installing

```
npm install --save-dev browserify`
```

### usage

```
./node_modules/.bin/browserify ./src/main.js -o ./dist/bundle_browserified.js
```

### output

- `dist/bundle_browserified.js`

## ES6 with babel

### babel installing

```
npm install --save-dev babel-cli babel-preset-es2015
```

### dependencies

- `.babelrc`

### usage

```
./node_modules/.bin/babel ./src/es6example.js -o ./dist/es6example_babeled.js
```

### output

- `dist/es6example_babeled.js`

## babelify

### requirements

- [browserify](#browserify)
- [ES6 with babel](#ES6-with-babel)

### installing

```
npm install --save-dev babelify
```

### usage

```
./node_modules/.bin/browserify ./src/main.js -o ./dist/bundle_babelified.js -t [babelify --presets [ es2015 ] ]
```

### output

- `dist/bundle_babelified.js`

## webpack

### installing

```
npm install --save-dev webpack
```

### dependencies

- `webpack.config.js`

### usage

```
./node_modules/.bin/webpack
```

### output

- `dist/bundle_webpacked.js`

## html-webpack-plugin

### requirements

- [webpack](#webpack)

### installing

```
npm install --save-dev html-webpack-plugin
```

### dependencies

- `webpack.config.js`

### usage

```JavaScript
var webpackConfig = {
    output: {
        path: "./dist/"
    },
    plugins: [new HTMLWebpackPlugin({
        title: 'HTML Webpack Plugin',
        filename: 'index_htmlwebpackplugin.html'
    })]
};
```

### output

- `dist/index_htmlwebpackplugin.html`

## jshint

### installing

```
npm install --save-dev jshint
```

### dependencies

- `.jshintrc` from [airbnb](https://github.com/airbnb/javascript/blob/master/linters%2F.jshintrc)

### usage

```
./node_modules/.bin/jshint ./src/es6example.js
```

## eslint

### installing

```
npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```

### dependencies

- `.eslintrc` from [airbnb](https://github.com/airbnb/javascript/blob/master/linters%2F.eslintrc)
- `.eslintignore`

#### usage

```
./node_modules/.bin/eslint ./src/es6example.js
```

## LESS

### installing

```
npm install --save-dev less
```

### usage

```
./node_modules/.bin/lessc ./src/style.less ./dist/style.css
```

### output

- `dist/style.css`

## SCSS

### requirements

- [ruby](https://www.ruby-lang.org/)
- [gem](https://www.rubygems.org/)

### installing

```
gem install scss
```

### usage

```
scss ./src/style.scss ./dist/style_scss.css --sourcemap=none
```

### output

- `dist/style_scss.css`

## scss-lint

### requirements

- [ruby](https://www.ruby-lang.org/)
- [gem](https://www.rubygems.org/)
- [SCSS](#scss)

### installing

```
gem install scss_lint
```

### dependencies

- `.scss-lint.yml`

### usage

```
scss-lint ./src/style.scss
```

## mocha

### installing

```
npm install --save-dev mocha
```

### dependency

- `./test`

### usage

```
./node_modules/.bin/mocha
```

## chai

### installing

```
npm install --save-dev chai
```

### usage

```JavaScript
var assert = require('chai').assert;
```

## mocha with babel
 
### installing

```
npm install --save-dev babel-register
```

### usage

```
./node_modules/.bin/mocha --compilers js:babel-register
```

## istanbul@1.0.0-alpha.2

### installing

```
npm install --save-dev istanbul@1.0.0-alpha.2
```

### dependencies

- `.istanbul.yml`

### usage

```
./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --compilers js:babel-register && ./node_modules/.bin/istanbul check-coverage
```

### output

- `coverage/`

## selenium-webdriver

### requirements

- [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/)

### installing

```
npm install --save selenium-webdriver
```

### dependencies

- `functional-test.js`
Actually, you need to separate functional test to another repository

### usage

```
node functional-test.js
```
