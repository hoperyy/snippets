```js
function retry(fn, times, delay) {
    if (times < 1) {
        return Promise.resolve();
    }

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            try {
                fn();
            } catch(err) {
                reject();
            }

            resolve(retry(fn, times - 1, delay));
        }, delay);
    });
}

retry(() => console.log(1), 3, 2000)
.then(() => console.log('done'));
```