```js
const zipFolder = require('zip-a-folder');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const targetPath = path.join(__dirname, 'xx.zip');
const srcFolder = path.join(__dirname, 'src');

run();

function run() {
    console.log('start');
    if (fs.existsSync(targetPath)) {
        fse.removeSync(targetPath);
    }

    console.log('zipping');
    zipFolder.zipFolder(srcFolder, targetPath, function (err) {
        if (err) {
            console.log('Something went wrong!', err);
        }
    });
}

```