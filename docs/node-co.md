# Node  co 库的原理实现

```javascript
const fs = require('fs');
const path = require('path');

const thunksify = function (fn) {
    return function () {
        let args = Array.prototype.slice.call(arguments);

        return function () {
            args.push(...Array.prototype.slice.call(arguments));
            return fn.apply(this, args);
        };
    };
};

// const readFile = thunksify(fs.readFile);

const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const gen = function* () {
    const r1 = yield readFile('./a');
    console.log(r1.toString());
    const r2 = yield readFile('./b');
    console.log(r2.toString());
};

const autoRunThunk = (gen) => {
    const g = gen();

    const run = (data) => {
        let r = g.next();

        r.value((err, data) => {
            if (err) {
                throw new Error(err);
            }

            run(data);
        });
    };

    run();
};

// const autoRunThunk = (gen) => {
//     let g = gen();

//     const run = (startData) => {
//         const r = g.next(startData);

//         if (r.done) {
//             return;
//         }

//         r.value((err, data) => {
//             if (err) {
//                 throw new Error(err);
//             }

//             run(data);
//         });
//     };

//     run();
// };

// autoRunThunk(gen);

const autoRunPromise = (gen) => {
    const g = gen();

    const run = (data) => {
        const r = g.next(data);

        if (r.done) {
            return;
        }

        r.value.then(data => {
            run(data);
        });
    };

    run();
};

// autoRunPromise(gen);

function co(gen) {
    const ctx = this;

    function thunk2promise(thunk) {
        if (typeof thunk === 'function') {
            return new Promise(function (resolve, reject) {
                thunk((err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
        }

        if (typeof thunk.then === 'function') {
            return thunk;
        }

        throw new Error('not promise or thunk');
    }

    function promise2thunk(promise) {
        if (typeof promise === 'function') {
            return promise;
        }

        if (typeof promise.then === 'function') {
            return (done) => {
                promise.then(function (data) {
                    done(null, data);
                }, function (err) {
                    done(err, null);
                });
            }
        }

        throw new Error('not promise or thunk');
    }

    return new Promise((resolve, reject) => {
        if (typeof gen === 'function') {
            gen = gen.call(ctx);
        }

        if (!gen || typeof gen.next !== 'function') {
            return resolve(gen);
        }

        function next(data) {
            let r = gen.next(data);

            if (r.done) {
                resolve(r.value);
                return;
            }

            const value = promise2thunk(r.value);

            value((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    next(data);
                }
            });

            // value.then(function (data) {
            //     next(data);
            // }, function (err) {
            //     reject(err);
            // });
        }

        next();
    });
}

co(function* () {
    const a = yield readFile('./a');
    const b = yield readFile('./b');

    console.log(a, b);
    return { a, b }
}).then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});
```
