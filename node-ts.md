tsconfig.json

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        //"noImplicitAny": false,
        //"sourceMap": true,
        "allowJs": true,
        //"outDir": "target",
        "inlineSourceMap": true
        //"inlineSources": true
    },
    "include": [
        "*.ts",
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```