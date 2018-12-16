
# Node 命令行

```javascript
"bin": {
    "command": "./xxx.js"
}
```

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const commander = require('commander');

commander
    .command('xxx [param]')
    .description('xxx project.')
    .allowUnknownOption()
    .option('-w, --watch', 'watch')
    .action((param, options) => {
        const watch = options.watch;
    });

// error on unknown commands
commander.on('command:*', function () {
    console.error(`Invalid command: ${'%s'.yellow}\nSee list of available commands.`, commander.args.join(' '));
    showHelp();
    process.exit(1);
});

commander.parse(process.argv);
```

```javascript
const semver = require('semver');
const requiredVersion = require('../package.json').engines.node

if (!semver.satisfies(process.version, requiredVersion)) {
    console.log(
        `\nYou are using Node ${process.version}, but this version of vbuilder-cli requires Node ${requiredVersion}.\nPlease upgrade your Node version.\n`.yellow)
    process.exit(1)
}
```