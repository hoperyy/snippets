```js
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });
```