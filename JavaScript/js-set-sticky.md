```css
dom {
    position: sticky;
    left: 0;
    top: 0;
}
```

```js
function setSticky(dom) {
    const prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
    const test = document.head.style;

    for (let i = 0; i < prefix.length; i += 1) {
        test.position = prefix[i] + 'sticky';
    }

    if (!test.position) {
        const $dom = document.getElementById('xx');
        const resetPos = () => {
            if (pageUtils.getPosition($dom, 'top') <= 0) {
                dom.style.position = 'fixed';
                dom.style.top = 0;
            } else {
                dom.style.position = 'relative';
                dom.style.top = 0;
            }
        };
        resetPos();
        window.addEventListener('scroll', resetPos);
    }
    
    test.position = '';
}
```