```js
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const child = require('child_process');

const currentFolder = __dirname;
const tempFolder = path.join(currentFolder, `../temp`);

const currentFolderName = path.basename(currentFolder);

const tempAppFolder = path.join(tempFolder, currentFolderName);
const targetAppZip = path.join(tempFolder, currentFolderName + '.zip');

const nm = path.join(currentFolder, 'node_modules');
const nodeDeps = [];

function upgradeVersion() {
    const pkg = require('./package.json');
    const version = pkg.version;
    const versionArr = version.split('.');
    versionArr[2] = Number(versionArr[2]) + 1;

    pkg.version = versionArr.join('.');

    // 重写 package.json
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, '\t'));
}

function copyCurrentFolder() {
    console.log('复制到临时目录...');

    if (fs.existsSync(tempAppFolder)) {
        fse.removeSync(tempAppFolder);
    }

    const curFiles = fs.readdirSync(currentFolder);

    curFiles.forEach(name => {
        if (/node_modules/.test(name)) {
            nodeDeps.forEach(depName => {
                fse.copySync(path.join(currentFolder, 'node_modules', depName), path.join(tempAppFolder, 'node_modules', depName));
            });
        } else {
            fse.copySync(path.join(currentFolder, name), path.join(tempAppFolder, name));
        }
    });
}

function run() {
    upgradeVersion();

    console.log('删除原来的 zip 文件...');
    if (fs.existsSync(targetAppZip)) {
        fse.removeSync(targetAppZip);
    }

    // 复制当前目录到临时目录
    copyCurrentFolder();

    console.log('zipping');
    child.exec(`cd ../temp/${currentFolderName} && zip -r -q ../${currentFolderName}.zip ./`);
}

run();
```