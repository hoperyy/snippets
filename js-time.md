
```js
export default {
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
    }
}
```