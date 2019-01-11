initScrollHandler.js

```js
const scrollHandlers = [];

export default {
    initScrollEvent(debounceTime) {
        let preActTime = 0;
        let curActTime = 0;

        // 监听 onscroll 事件，动态高亮 tab
        window.addEventListener('scroll', () => {
            if (!scrollHandlers.length) {
                return;
            }

            curActTime = Date.now();

            if (curActTime - preActTime < 300) {
                return;
            }

            preActTime = curActTime;
            for (let i = 0; i < scrollHandlers.length; i++) {
                scrollHandlers[i]();
            }
        });
    },
    addScrollHandler(handler) {
        scrollHandlers.push(handler);
    }
};
```