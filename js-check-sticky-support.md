```js
function definePosition () {
    let stickyProp
    if (this.props.useFixed) {
      stickyProp = 'fixed'
    } else {
      const prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-']
      const test = document.head.style
      for (let i = 0; i < prefix.length; i += 1) {
        test.position = `${prefix[i]}sticky`
      }
      stickyProp = test.position ? test.position : 'fixed'
      test.position = ''
    }
    return stickyProp
}
```