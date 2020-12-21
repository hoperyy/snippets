```js
wait(delay = 2000) {
    return new Promise(resolve => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            resolve();
        }, delay);
    });
}
```