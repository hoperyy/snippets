以下配置基于 webpack@3.5.5

+   `.babelrc`

    ```json
    {
        "plugins": [
            "transform-vue-jsx",
            "add-module-exports",
            "transform-object-assign",
            [
                "transform-object-rest-spread",
                {
                    "useBuiltIns": true
                }
            ]
        ],
        "presets": [
            "env",
            "es2015",
            "stage-2"
        ]
    }
    ```

+   常用插件

    +   `on-build-webpack`
    +   `webpack-merge`: `merge.smart(obj1, obj2, obj3)`
    +   `webpack-dev-server`
    +   `webpack-bundle-analyzer`
    +   `write-file-webpack-plugin`: 将内存文件写入硬盘

+   常用配置

    ```js
    // dev mode
    const VUE_PATH = 'vue/dist/vue.js';
    
    // prod mode
    const VUE_PATH = 'vue/dist/vue.common.js';

    // dev mode
    const cssLoaders = ['vue-style-loader', 'css-loader', 'postcss-loader', px2rem];

    const lessLoaders = ['vue-style-loader', 'css-loader', 'postcss-loader', px2rem, 'less-loader'];

    const sassLoaders = ['vue-style-loader', 'css-loader', 'postcss-loader', px2rem, 'sass-loader'];

    // prod mode
    let cssLoaders = ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'postcss-loader'],
        fallback: 'vue-style-loader'
    });

    let lessLoaders = ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'postcss-loader', 'less-loader'],
        fallback: 'vue-style-loader'
    });

    let sassLoaders = ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
        fallback: 'vue-style-loader'
    });

    // webpack rules
    {
        entry: {
            'index/index': ['xx/index.js'],
            'detail/index': ['babel-polyfill', 'xx/index.js']
        },
        module: {
            rules: [{
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader?name=img/[hash].[ext]&limit=8000',
                enforce: 'post'
            }, {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?name=img/[hash].[ext]&limit=10',
                enforce: 'post'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                enforce: 'post',
                exclude: {
                    test: [
                        path.join(srcFolder, 'node_modules'),
                        path.join(__dirname, '../node_modules')
                    ],
                    exclude: [
                        /strip-ansi/
                    ]
                }
            }, {
                test: /\.[(js)(vue)(vuex)(tpl)(html)]*$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components)/,
                loader: require('./utils/util-get-replace-loader').replace({ 
                    replacements: [{
                            pattern: new RegExp('$$_CDNURL_$$'.replace(/\$/g, '\\$'), 'g'),
                            replacement() {
                                return 'test value';
                            },
                        }
                    ]
                }),
            }, {
                test: /\.css$/,
                use: cssLoaders,
            }, {
                test: /\.less$/,
                use: lessLoaders,
            }, {
                test: /\.(scss|sass)$/,
                use: sassLoaders,
            }, {
                test: /\.vue$/,
                use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: cssLoaders,
                                less: lessLoaders,
                                sass: sassLoaders,
                            },
                        },
                    },
                    segLoaderBody,
                    mcjsLoaderBody
                ],
                include: [
                    finalConfig.srcFolder
                ],
            }]
        },
        resolve: {
            alias: {
                vue$: VUE_PATH
            },
            modules: [
                path.resolve(srcFolder, 'node_modules/'),
                path.resolve(__dirname, '../node_modules/'),
            ],
            extensions: ['.js', '.json', '.vue']
        },
        resolveLoader: {
            modules: [
                path.resolve(srcFolder, 'node_modules/'),
                path.resolve(__dirname, '../node_modules/'),
            ],
        }
    }
    ```

