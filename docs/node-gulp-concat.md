```js
async function genMinToStaticDraw() {
    // 压缩
    const gulp = require('gulp');
    const gulpConcat = require('gulp-concat');
    const gulpMinifyCss = require('gulp-minify-css');
    const gulpUglify = require('gulp-uglify');
    const gulpUtil = require('gulp-util');
    const gulpReplace = require('gulp-replace');
    // const gulpBabel = require('gulp-babel');

    const chokidar = require('chokidar');

    const jsSrcList = [];

    const toFolders = [];

    const runMerge = (uglify) => {
        toFolders.forEach(toFolder => {
            let jsPipe = gulp.src(jsSrcList).pipe(gulpConcat('draw.js'));

            // if (uglify) {
            // debug quickly
            if (false) {
                console.log('执行 uglify');
                jsPipe = jsPipe
                    // .pipe(gulpReplace('const ', 'var '))
                    .pipe(gulpUglify())
                    .on('error', (err) => {
                        gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString());
                    });
            }

            jsPipe.pipe(gulp.dest(toFolder)).on('end', () => {
                console.log('draw.min.js 合并完成');
            });
        });
    };

    if (isDev) {
        // 合并 js
        runMerge(false);

        const watcher = chokidar.watch(jsSrcList, {
            ignored: /(^|[\/\\])\../, // ignore dotfiles
            persistent: true
        });

        watcher.on('change', (path, stats) => {
            console.log('change: ', path);
            runMerge(false);
        });
    } else {
        runMerge(true);
    }
}
```