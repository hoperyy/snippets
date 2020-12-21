```js
mounted() {
    document.body.appendChild(this.$el);
},
destroyed() {
    if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
}
```