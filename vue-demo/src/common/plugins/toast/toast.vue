<template>
    <div v-show='visible' :class='position' class='toast'>
         <span>{{message}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                visible: false,
                message : '',
                position : ''
            };
        }
    }
</script>
 
 
<style lang="less">
@import './index.less';
</style>
