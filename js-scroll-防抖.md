```js
const scrollHandlers = [];

export default {
    initScrollEvent() {
        let preActTime = 0;
        let curActTime = 0;
        let timer = null;

        const delay = 200;

        // 监听 onscroll 事件，动态高亮 tab
        window.addEventListener('scroll', () => {
            if (!scrollHandlers.length) {
                return;
            }

            curActTime = Date.now();

            if (curActTime - preActTime < delay) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    for (let i = 0; i < scrollHandlers.length; i++) {
                        scrollHandlers[i]();
                    }
                    preActTime = curActTime;
                }, delay);
            } else {
                clearTimeout(timer);
                preActTime = curActTime;
                for (let i = 0; i < scrollHandlers.length; i++) {
                    scrollHandlers[i]();
                }
            }
        });
    },
    addScrollHandler(handler) {
        scrollHandlers.push(handler);
    }
}
```