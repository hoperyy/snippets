前置准备

```js
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

import utils from '../utils'; // 工具函数

Vue.use(VueScrollTo);
```

```js
export default {
    tabBarClick(index) {
        this.activeIndex = index;
        const targetContentItem = document.getElementById(`tab-content-item-${index}`);

        if (targetContentItem) {
            this.disableScrollWatching = true; // 禁止 scroll 事件监听
            this.$scrollTo(targetContentItem, 300, {
                offset: -this.tabbarHeight, // tab 的高度
                onDone: (element) => {
                    // scrolling is done
                    clearTimeout(delayTimer);

                    delayTimer = setTimeout(() => {
                        clearTimeout(delayTimer);
                        this.disableScrollWatching = false; // 恢复 scroll 事件监听
                    }, 300);
                },
            });
        }
    },

    watchScroll() {
        const tabContentItems = this.tabs.map((item, index) => document.getElementById(`tab-content-item-${index}`));
        const tabbarHeight = this.tabbarHeight;

        const highLightTab = () => {
            if (this.disableScrollWatching) {
                return;
            }

            for (let i = 0, len = tabContentItems.length; i < len; i++) {
                const dom = tabContentItems[i];
                const height = pageUtils.getStyle(dom, 'height') || 0;
                const top = pageUtils.getPosition(dom, 'top') - tabbarHeight;

                if (top <= 0 && top + height >= 0) {
                    this.activeIndex = i;
                    break;
                }
            }
        };

        // 监听 onscroll 事件，动态高亮 tab
        utils.addScrollHandler(highLightTab);
    }
}
```