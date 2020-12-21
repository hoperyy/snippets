```js
const semver = require('semver');
const requiredVersion = require('../package.json').engines.node;

if (!semver.satisfies(process.version, requiredVersion)) {
    console.log(`您当前使用的 node 版本 ${process.version} 不符合 vbuilder 要求的 node 版本 ${requiredVersion}.`
    process.exit(1);
}

"engines": {
    "node": ">=8.9.1 <12.17.0"
}
```