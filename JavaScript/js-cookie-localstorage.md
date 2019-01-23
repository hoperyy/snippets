```js
import Cookies from 'js-cookie';

export default {
    getCookie(name){
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
}
```