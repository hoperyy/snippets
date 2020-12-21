
```js
// reset css
import '../../common/css/reset.css';

import Vue from 'vue';
import * as wdui from 'wdui';
import VuePlugins from '../../common/plugins/index';

import Index from './index.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Index,
        }],
});

Vue.use(wdui);
Vue.use(VuePlugins.toastPlugin);
Vue.use(VuePlugins.ajaxPlugin);
Vue.use(VuePlugins.loadingPlugin);

// 初始化
new Vue({
    router
}).$mount('#app');

```
