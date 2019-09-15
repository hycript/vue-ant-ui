<template>
<div class="demo">
    <vBadge :count="99">
        <a href="#" class="head-example"></a>
    </vBadge>
    <vBadge :count="100">
        <a href="#" class="head-example"></a>
    </vBadge>
    <vBadge :count="99" :overflowCount="10">
        <a href="#" class="head-example"></a>
    </vBadge>
    <vBadge :count="1000" :overflowCount="999">
        <a href="#" class="head-example"></a>
    </vBadge>
</div>
</template>
<style lang="less" scoped>
.demo{
    ::v-deep .head-example{
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
        vertical-align: middle;
    }
    ::v-deep .ant-badge:not(.ant-badge-not-a-wrapper){
        margin-right: 20px;
    }
}
</style>
