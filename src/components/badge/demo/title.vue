<template>
<div class="demo">
    <vBadge :count="5" title="Custom hover text">
        <a href="#" class="head-example" />
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
