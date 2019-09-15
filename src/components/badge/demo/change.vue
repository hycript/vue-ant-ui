<template>
<div class="demo">
    <div>
        <vBadge :count="count">
            <a href="#" class="head-example" />
        </vBadge>
        <vButtonGroup>
            <vButton @click="dec">
                <vIcon type="minus" />
            </vButton>
            <vButton @click="inc">
                <vIcon type="plus" />
            </vButton>
        </vButtonGroup>
    </div>
    <div style="margin-top: 10px">
        <vBadge :dot="show">
            <a href="#" class="head-example" />
        </vBadge>
        <vButton @click="show = !show">
            <vIcon :type="show ? 'close' : 'eye'" />
        </vButton>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            count: 5,
            show: true,
        }
    },
    methods: {
        dec() {
            let count = this.count - 1
            if (count < 0) {
                count = 0
            }
            this.count = count
        },
        inc() {
            this.count++
        },
    }
}
</script>
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
