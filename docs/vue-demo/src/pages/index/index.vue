<template>
    <div>test</div>
    <!-- <scroll-load v-if="!scrollLoading.completed" @onLoad="loadMore" ref="scroller" :hasMore="!scrollLoading.completed"></scroll-load> -->
</template>

<script>
import commonUtils from '../../common/utils';

export default {
    async mounted() {
        this.$loading.open();

        let result = await commonUtils.request(this, 'get', 'xxx', JSON.stringify({ offset: 0, limit: 30 }), { errorMsg: '网络异常' });

        this.$loading.close();
    },
};
</script>

<style>
body {
    position: relative;
}
</style>

