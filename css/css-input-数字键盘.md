
```html
<input class="input" v-on:input="onInput" type="tel" v-model="inputCode" placeholder="4位数字邀请码" pattern="\d*" maxlength="4">

<script>
onInput() {
    this.inputCode = this.inputCode.replace(/[^\d]/g,'').slice(0, 4);
}
</script>
```