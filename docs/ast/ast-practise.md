```js
// @babel/parser 将 script 转译为 ast
const parse = require('@babel/parser').parse;
// @babel/traverse 遍历 ast
const traverse = require('@babel/traverse').default;
// @babel/types 处理 ast 
const t = require('@babel/types');
// @babel/generator 将 ast 还原为代码
const generator = require('@babel/generator').default;

// vue 解析可能需要的
// const vueTemplateCompiler = require('vue-template-compiler');


const code = `
    import { Select as MySelect, Pagination } from 'xxx-ui';
    // import UI2 from 'xxx-ui';
    import * as UI from 'xxx-ui';

    const a = 1;
`;

// import MySelect from 'xxx-ui/Select/Select.js';
// import Pagination from 'xxx-ui/Pagination/Pagination.js';
// // import UI2 from 'xxx-ui';

// import * as UI from 'xxx-ui';

// 生成 ast
const ast = parse(code, { sourceType: 'module' });

console.log(ast);

// 遍历 ast 且 转化 ast
traverse(ast, {
    ImportDeclaration(path) {
       console.log(path.node);
    //    if (t.isImportNamespaceSpecifier(path.node)) {
    //         console.log(path.node.program.body);
    //    }
    }
});

// 生成新代码
```