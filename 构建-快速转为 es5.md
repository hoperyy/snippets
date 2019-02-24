## js

```js
const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
    mode: 'production',
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'index.js',
        path: path.join(userFolder, 'dist'),
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            // exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};

webpack(webpackConfig, (err, stats) => {
        if (err) {
            logUtil.error('Compilication failed.');

            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            process.exit(1);
            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            console.error('Compilication failed.');
            console.error(info.errors);
            process.exit(1);
        }

        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        console.log('Complication done!');
    });
```
## `.babelrc`

```json
{
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread"
    ],
    "presets": [
        "@babel/preset-env"
    ]
}
```

## `package.json`

```json
{
  "name": "transform2es5",
  "version": "1.0.0",
  "main": "index.js",
  "author": "https://github.com/hoperyy",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.1.6",
    "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
    "@babel/preset-env": "^7.1.6",
    "@vdian/vbuilder-helper": "^2.1.15",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.4",
    "colors": "^1.3.2",
    "uglifyjs-webpack-plugin": "^2.0.1",
    "webpack": "^4.26.0"
  }
}

```
