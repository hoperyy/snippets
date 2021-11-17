```js
window.addEventListener('beforeunload', (e) => {
  let tips = '请确认是否关闭';
  e.returnValue = tips
  return tips
})
```