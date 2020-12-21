
```js
import Cookies from 'js-cookie';
import Login from 'login';

export default {
    reportError(data) {
        try {
            window.vcollect.reportError(data);
        } catch (err) {

        }
    },
    // 标记请求失败的几种情况：请求本身出错；请求结果为 null；请求返回内容异常。
    async request(vm, method, url, param, { errorMsg } = {}) {
        let data;

        try {
            data = await vm.$ajax({ url, method, params: { param } });
        } catch (err) {
            errorMsg && vm.$toast(errorMsg);
            this.reportError('apiError', url, JSON.stringify(err));
            return null;
        }

        if (!data) {
            errorMsg && vm.$toast(errorMsg);
            this.reportError('apiError', url, errorMsg);
            return null;
        } else {
            if (data.status.code != 0 || (data.result && data.result.errorMsg)) {
                // 这种情况下通用脚本会自动显示浮层
                // 这种情况下错误监控会自动上报
                return null;
            }

            return data.result;
        }
    },
    getQuery(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    getQuery(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    getCookie(name) {
        return Cookies.get(name);
    },
    setCookie(name, value) {
        Cookies.set(name, value)
    },
    setLocalStorage(name, value) {
        if (window.localStorage) {
            try {
                window.localStorage.setItem(name, value);
            } catch (e) {

            }
        }
    },
    getLocalStorage(name) {
        let value = null;
        if (window.localStorage) {
            try {
                value = window.localStorage.getItem(name);
            } catch (e) {
                return null;
            }
        }

        return value;
    },
    isLogin() {
        return Login.isLogin();
    },
    goLogin() {
        window.location = Login.login();
    },
};

```
