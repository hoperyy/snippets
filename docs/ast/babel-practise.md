const babel = require('babel-core');
const types = require('babel-types');

const code = `
import { Select as MySelect, Pagination } from 'xxx-ui';
// import UI2 from 'xxx-ui';
import * as UI from 'xxx-ui';
`;

const plugin = {
    visitor: {
        ImportDeclaration(path, { opts }) {
            const source = path.node.source.value;
            const specifiers = path.node.specifiers;

            const isImportDefaultSpecifier = types.isImportDefaultSpecifier(specifiers[0]); // import UI from 'xxx-ui'; 这种
            const isImportNamespaceSpecifier = types.isImportNamespaceSpecifier(specifiers[0]); // import * as UI from 'xxx-ui'; 这种

            if (!isImportDefaultSpecifier && !isImportNamespaceSpecifier) {
                const declarations = specifiers.map(specifier => {
                    const importedName = specifier.imported.name;

                    return types.ImportDeclaration(
                        [types.ImportDefaultSpecifier(specifier.local)], 
                        types.StringLiteral(`${source}/${importedName}/${importedName}.js`)
                    );
                });

                path.replaceWithMultiple(declarations);
            }
        }
    }
}

const result = babel.transform(code, {
    plugins: [
        [
            plugin,
            {
                test: 1
            }
        ]
    ]
});

console.log(result.code);

// output