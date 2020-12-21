```js
const child = require('child_process');

child.execSync('xxxx', {
    stdio: 'inherit'
});
```

```js
const child = require('child_process');

const newProcess = child.fork('xxxx', args, {
    cwd:xxx,
    silent: true
});

newProcess.stdout.on('data', (data) => {
    if (data) {
        const log = data.toString();
    }
})
```