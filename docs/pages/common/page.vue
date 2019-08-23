<style lang="less">
.page {
    padding: 0 30px;
    &-title {
        display: block;
        font-size: 1.5em;
        line-height: 1;
        padding: 30px 20px;
        border-bottom: 1px solid #eee;
    }
    &-body > .title{
        display: block;
        font-size: 1.35em;
        line-height: 1;
        padding: 20px 20px 0px;
        font-weight: bold;
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
