## 介绍

Node.js 是一种 JavaScript 的运行环境，能够使得 JavaScript 脱离浏览器运行。

Node.js 建立在 [Chrome V8 JavaScript](https://developers.google.com/v8/)  引擎上。

这个项目介绍了 Node 相关的各类知识，持续更新中。

该项目对 Windows 不友好，对 Mac 友好

[node api 中文文档](http://nodejs.cn/api/)

[node api docs](https://nodejs.org/en/docs/)

## Node.js 能做什么

+   服务器开发：[express](https://github.com/expressjs/express) / [koa](https://github.com/koajs/koa) 等
+   im 即时聊天：socket.io
+   前端构建工具：[webpack](https://github.com/webpack) / [gulp](https://github.com/gulpjs/gulp) / [grunt](https://github.com/gruntjs/grunt) …
+   写操作系统：[NodeOS](https://github.com/NodeOS/NodeOS)
+   命令行工具：比如 [bio](https://github.com/weidian-inc/bio-cli)
+   IDE：[vscode](https://github.com/Microsoft/vscode) / [atom](https://github.com/atom/atom) 等

## Node 知识图谱

### 准备阶段

+   Node 安装与配置
    +   [搭建 Node.js 开发环境与版本控制](./docs/Node.js/搭建Node.js开发环境与版本控制/README)
    +   [npm 介绍与源控制](./docs/Node.js/npm介绍与源控制/README)
    +   [node 的模块机制](./docs/Node.js/node的模块机制/README)
+   Node 语言编程特点
    +   [ECMAScript 6 / 7](http://es6.ruanyifeng.com/)
    +   OO（面向对象）
    +   [异步编程](./docs/Node.js/异步编程/README)
+   调试
    +   [调试 - console](./docs/Node.js/调试-console/README)
    +   [调试 - debug](./docs/Node.js/调试-debug/README)
+   [node 的应用场景](./docs/Node.js/node的应用场景/README)

### 功能模块

+   [文件操作 - fs](./docs/Node.js/文件操作-fs/README)
+   [路径 - path](./docs/Node.js/路径-path/README)
+   [流 - stream](./docs/Node.js/流-stream/README)
+   [工具 - util](./docs/Node.js/工具-util/README)
+   [事件 - events](./docs/Node.js/事件-events/README)
+   [gzip / ungzip](./docs/Node.js/gzip-ungzip/README)
+   网络
    +   [网络编程 - tcp](./docs/Node.js/网络编程-tcp/README)
    +   [网络编程 - udp](./docs/Node.js/网络编程-udp/README)
    +   [网络编程 - dns](./docs/Node.js/网络编程-dns/README)
    +   [网络编程 - http](./docs/Node.js/网络编程-http/README)
    +   [网络编程 - req](./docs/Node.js/网络编程-req/README)
    +   [网络编程 - res](./docs/Node.js/网络编程-res/README)
    +   [网络编程 - client request](./docs/Node.js/网络编程-client-request/README)
    +   [url 解析 - url 模块](./docs/Node.js/url解析-url模块/README)
    +   [url 解析 - querystring 模块](./docs/Node.js/url解析-querystring模块/README)
+   进程
    +   [进程 - process](./docs/Node.js/进程-process/README)
    +   [进程 - child_process](./docs/Node.js/进程-child_process/README)
    +   [进程 - 多进程](./docs/Node.js/进程-多进程/README)
    +   [进程 - cluster](./docs/Node.js/进程-cluster/README)
+   [压缩 - zip](./docs/Node.js/压缩-zip/README)
+   [命令行交互](./docs/Node.js/命令行交互/README)

### 质量

+   [异常处理](./docs/Node.js/异常处理/README)
+   [单元测试](./docs/Node.js/单元测试/README)
+   性能优化
    +   [内存控制](./docs/Node.js/内存控制/README)
    +   [benchmark](./docs/Node.js/benchmark/README)

### 框架

+   [express](./docs/Node.js/express/README)
+   [koa](./docs/Node.js/koa/README)

### 其他

+   [事件循环](./docs/Node.js/事件循环/README)

## 参考资料

+   [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
+   [《深入浅出 Node.JS》](https://www.amazon.cn/dp/B00GOM5IL4/ref=sr_1_1?ie=UTF8&qid=1523943449&sr=8-1&keywords=%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAnode.js)
+   [Node.js 包教不包会](https://github.com/alsotang/node-lessons)
+   [Node learning guide](https://github.com/chyingp/nodejs-learning-guide/blob/master/README.md)
+   [狼叔：如何正确的学习Node.js](https://github.com/i5ting/How-to-learn-node-correctly)
+   Node 状态码
    +   https://amery2010.gitbooks.io/nodejs-api-doc-cn/process/exit_codes.html
    +   http://www.runoob.com/nodejs/nodejs-global-object.html

## LICENSE

MIT