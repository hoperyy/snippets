```js
function getUrlsInString(string) {
    // http://k.weidian.comhttps://k.weidian.com
    // https://k.weidian.com
    // http://k.weidian.com
    const arr = string.match(/\bhttps?:\/\/\S+/gi) || [];

    const multiArr = [];

    for (let i  = 0, len = arr.length; i < len; i++) {
        // arr[i] 可能的值：http://k.weidian.comhttps://k.weidian.com、https://k.weidian.com、http://k.weidian.com
        let s = arr[i];

        let httpLastIndex = s.lastIndexOf('http://');
        let httpsLastIndex = s.lastIndexOf('https://');

        multiArr[i] = [];

        while (httpsLastIndex !== -1 || httpLastIndex !== -1) {
            const finalLastIndex = Math.max(httpLastIndex, httpsLastIndex);
            // console.log(s, finalLastIndex);
            multiArr[i].unshift(s.slice(finalLastIndex));
            s = s.slice(0, finalLastIndex);

            httpLastIndex = s.lastIndexOf('http://');
            httpsLastIndex = s.lastIndexOf('https://');
        }
    }

    const rt = [];

    for (let i = 0, len = multiArr.length; i < len; i++) {
        rt.push(...multiArr[i]);
    }

    // 排序，length 长的靠前
    rt.sort((a, b) => b.length - a.length);

    return rt;
}

function analyzeStringByUrls(urls, string) {
    if (!urls || urls.length == 0) {
        return [ { type: 'text', content: string } ];
    }

    const url = urls[0];
    const arr = string.split(url);

    let rt = [];

    for (let i = 0, len = arr.length; i < len; i++) {
        rt.push(...this.analyzeStringByUrls(urls.slice(1), arr[i]));

        if (i !== len - 1) {
            rt.push({type: 'url', content: url });
        }
    }

    return rt;
}

function getAnalyzedStringArr(string) => {
    return analyzeStringByUrls(getUrlsInString(string), string);
};

const string = `https://k.weidian.comhttp://k.weidian.comhttps://k.weidian.comhttp://k.weidian.comhttps://k.weidian.comhttp://k.baidu.com这就是链接`;

const urls = getAnalyzedStringArr(string);
```