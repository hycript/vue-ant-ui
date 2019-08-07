<style lang="less">
.page {
    padding: 0 30px;
    &-title {
        display: block;
        font-size: 20px;
        line-height: 1;
        padding: 30px 20px;
        border-bottom: 1px solid #eee;
    }
}
</style>
<template>
<div :class="`${scope}`">
    <h1 v-if="title" :class="`${scope}-title`">{{ title }}</h1>
    <div :class="`${scope}-body`">
        <slot></slot>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            scope: 'page',
        }
    },
    props: {
        title: String,
    },
}
</script>
