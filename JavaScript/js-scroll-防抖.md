```js
let preActTime = 0;
let curActTime = 0;

// 监听 onscroll 事件，动态高亮 tab
window.addEventListener('scroll', () => {
    curActTime = Date.now();

    if (curActTime - preActTime < 300) {
        return;
    }

    preActTime = curActTime;
    console.log('action');
});
```