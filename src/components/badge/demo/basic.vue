<template>
<div class="demo">
    <vBadge count="5">
        <a href="#" class="head-example"></a>
    </vBadge>
    <vBadge count="0" showZero>
        <a href="#" class="head-example"></a>
    </vBadge>
    <vBadge>
        <vIcon slot="count" type="clock-circle" style="color: #f5222d" />
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
