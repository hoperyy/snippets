import Vue from 'vue';
import Loading from './index.vue';

const LoadingConstructor = Vue.extend({
    components: {
        Loading
    },
    template:'<Loading :visible="visible" :showMask="showMask"></Loading>',
    data:function () {
        return {
            visible: false,
            showMask: false,
        }
    }
});


let instance = new LoadingConstructor({
    el: document.createElement('div')
});

document.body.appendChild(instance.$el);

export default {
    install() {
        Vue.toast = Vue.prototype.$loading = {
            open(opts){
                instance.showMask = opts && opts.showMask || false;
                instance.visible = true;
            },
            close(opts){
                instance.visible = false;
            }
        }
    }
}