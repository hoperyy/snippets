```js
import Cookies from 'js-cookie';

export default {
    getQuery(name, url){
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
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
    
    timeDiff(timestamp) {
      let d_minutes;
      let d_hours;
      let d_days;
      let d_seconds;
      let ret = '';
      const timeNow = parseInt(new Date().getTime() / 1000);
      d_seconds = timestamp / 1000 - timeNow;
      
      if (d_seconds < 0) {
        return;
      }
      d_days = parseInt(d_seconds / 86400);
      d_hours = parseInt(d_seconds / 3600) - d_days * 24;
      d_minutes = parseInt(d_seconds / 60) - d_days * 24 * 60 - d_hours * 60;
  
      if (d_days > 0) {
        ret += `${d_days}天`;
      }
      if (d_hours > 0) {
        ret += `${d_hours}小时`;
      }
      if (d_days < 1 && d_minutes > 0) {
        ret += `${d_minutes}分`;
      }
  
      return ret;
    },
}
```