<template>
<div>
    <vPopover class="popover" title="Title">
        <template slot="content">
            <div class="popover-content">
                <p class="a">Content</p>
                <p class="a">Content</p>
            </div>
        </template>
        <vButton type="primary">Hover me</vButton>
    </vPopover>
</div>
</template>
<style lang="less" scoped>
/* /deep/  */
.popover-content{
    p:last-child{
        margin-bottom: 0;
    }
}
</style>
