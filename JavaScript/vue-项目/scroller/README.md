```html
<scroll-load v-if="!scrollLoading.completed" @onLoad="loadMore" ref="scroller" :hasMore="!scrollLoading.completed"></scroll-load>
```