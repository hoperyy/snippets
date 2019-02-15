// reset css
import 'reset.css';

// css for current page
import './index.less';

import Vue from 'vue';
import VuePlugins from '../../common/plugins/index';
import VueScrollTo from 'vue-scrollto';

import Index from './routes/index/index.vue';

// 简单修改了下 wdui，主要是让 messageBox 支持 html 输入
import * as wdui from 'wdui';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Index,
    }],
});

Vue.use(VueScrollTo);
Vue.use(wdui);
Vue.use(VuePlugins.toastPlugin);
Vue.use(VuePlugins.ajaxPlugin);
Vue.use(VuePlugins.loadingPlugin);

// 注册filter
const registerFilters = function () {
    for (let k in VueFilters) {
        Vue.filter(k, VueFilters[k])
    }
}
registerFilters();

new Vue({
    router
}).$mount('#app')

