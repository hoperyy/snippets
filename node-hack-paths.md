```js
import path from 'path';
import fs from 'fs';

// 调整顺序
// // [ projectNodeModules, originalScaffoldNodeModules, viteScaffoldNodeModules ]
export const LIMITED_PATHS = [
	process.env.srcFolder,
	process.env.originalScaffoldFolder,
	process.env.viteScaffoldFolder,
	'/Users/lyy/Desktop/code/github/vite-main',
];
export const LIMITED_NM_PATHS = LIMITED_PATHS.map(item => path.join(item, 'node_modules'));

export function rewrite () {
    const BuiltinModule = require('module');

    // Guard against poorly mocked module constructors
    const Module = module.constructor.length > 1 ? module.constructor : BuiltinModule;
    const oldNodeModulePaths = Module._nodeModulePaths;

    // 移除外层路径
    const removeOutsidePaths = (paths) => {
        let newPaths = [];
        for (let i = 0; i < paths.length; i++) {
            const cur = paths[i];

            let isOutter = true;
            for (let j = 0; j < LIMITED_PATHS.length; j++) {
                // console.log(cur, LIMITED_PATHS[j], cur.indexOf(LIMITED_PATHS[j]));
                if (cur.indexOf(LIMITED_PATHS[j]) !== -1) {
                    isOutter = false;
                    break;
                }
            }

            if (!isOutter) {
                newPaths.push(cur);
            }
        }

        return newPaths;
    };

    const oldRequire = Module.prototype.require;

    // 目前暂时没啥用
    // Module.prototype.require = function(request: string) {
    // 	// console.log(request, this.paths);
    // 	// this.paths = [ 
    // 	// 	...LIMITED_NM_PATHS, 
    // 	// 	...LIMITED_PATHS 
    // 	// ]
    // 	return oldRequire.apply(this, [...arguments]);
    // }

    // console.log(process.env.originalScaffoldFolder, process.env.viteScaffoldFolder, process.env.srcFolder);
    // Module._nodeModulePaths = function (from) {
    // 	let paths = oldNodeModulePaths.apply(this, [...arguments]);
    // 	// paths = removeOutsidePaths(paths);

    // 	paths = [
    // 		// ...LIMITED_PATHS,
    // 		// ...LIMITED_NM_PATHS,
    // 		...paths,
    // 		// ...LIMITED_PATHS,
    // 		// ...LIMITED_NM_PATHS,
            
    // 	];

    // 	if (from.indexOf('vue-template-compiler') !== -1) {
    // 		console.log(from, paths);
    // 	}

    // 	return paths;
    // }

    const oldResolveLookupPaths = Module._resolveLookupPaths;
    Module._resolveLookupPaths = function(request, parent) {
        const [ first, ...last ] = oldResolveLookupPaths.apply(this, arguments);
        const basename = path.basename(first);

        let res = [
            first,
            ...LIMITED_NM_PATHS,
            ...LIMITED_NM_PATHS.map(item => path.join(item, basename)),
            ...last,
        ];

        res = removeOutsidePaths(res);

        return res;
    };
}
```