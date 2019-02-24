/*
 * @vbuilder.config.js
 */

// vbuilder 文档：http://vbuilder-doc.daily.vdian.net/vbuilder/doc/default-vue-scaffold-config.html

module.exports = ({ userDir, srcDir, distDir, taskName, webpack, webpackDevServer }) => {
    return {
        // distDir: './build', // 重置打包目录，默认隐藏

        // debugPort: 9000, // 调试端口号，默认 9000

        replace: {
            '$$_THOR_$$': {
                'dev-daily': 'xxx',
                'dev-pre': 'xxx',
                'dev-prod': 'xxx',
                'build-daily': 'xxx',
                'build-pre': 'xxx',
                'build-prod': 'xxx',
            },
        },

        px2rem: {
            open: true, // 如果要开启，需要设置为 true
            loader: 'px2rem-loader', // 开发者在当前目录需要自行安装 px2rem-loader: npm i px2rem-loader
            options:{
                remUni: 75
            }
        },

        // 可以合并到 webpack 的配置，按照 webpack 的配置风格
        webpackConfig: {

        },
        // html 创建或修改后的回调函数，参数为数组，数组项为 html 文件地址
        onHtmlBuild(htmlFileArray) {

        }
    };
};
