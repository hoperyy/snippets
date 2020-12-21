
```js
import Vue from 'vue';
import Toast from './toast.vue';

const ToastConstructor = Vue.extend(Toast);
ToastConstructor.prototype.close = function(){
    this.visible = false;
    this.$el.parentNode.removeChild(this.$el);
}

function toast(options={}) {
    let instance = new ToastConstructor().$mount(document.createElement('div'))
    let duration = options.duration || 2000;
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'middle'
    document.body.appendChild(instance.$el);
    instance.visible = true;
    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.close();
        }, duration);
    })
}

export default {
    install() {
        Vue.toast = Vue.prototype.$toast = toast
    },
    showToast: toast
}
```
