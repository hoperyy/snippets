```js
export default {
    getStyle(dom, name) {
        let result = (dom.currentStyle ? dom.currentStyle : window.getComputedStyle(dom, null))[name];
        return Number(result.match(/\d+/) ? result.match(/\d+/)[0] : 0);
    },
    getPosition(dom, name) {
        return dom.getBoundingClientRect()[name];
    },
    getOffset(dom, name) {
        return dom[`offset${name[0].toUpperCase()}${name.substring(1)}`];
    }
}
```