<template>
    <section class="scroll-loading" ref="elememt">
        <span v-if="hasMore">正在加载中...</span>
    </section>
</template>

<script>
import ScrollLoad from './scroll-load.js';

export default {
    props:{
        hasMore:{
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
            moreData: this.hasMore,
            text: '正在加载中...'
        }
    },
    mounted(){
        this.hasMore && this.init();
    },
    watch: {
        hasMore(newVal,oldVal){
            this.moreData = newVal;
        }
    },
    methods: {
        init(){
            let _this = this;
            if (!this.scroller){
                this.scroller = new ScrollLoad(this.$refs.elememt,{
                    initialLoad: false,
                    load: function() {
                        _this.$emit('onLoad');
                    }
                })
            }
        },
        destroy(){
            console.log('aaaa');
            this.scroller && this.scroller.destroy();
        },
        reset(){
            this.moreData = true;
            this.scroller && this.scroller.destroy();
            this.scroller = null;
            this.init();
        }
    }
}
</script>

<style lang="less">
@import "./index.less";
</style>
