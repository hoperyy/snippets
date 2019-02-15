import fn from 'fn';
import dayjs from 'dayjs';
export default {
    formatImgUrl(url, options){
        return options ? fn(url, options) : url;
    },
    formatTime(time,formatStr = 'YYYY-MM-DD HH:mm'){
        return dayjs(time).format(formatStr);
    }
}