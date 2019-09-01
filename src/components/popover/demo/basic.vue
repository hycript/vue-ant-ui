<template>
<div>
    <Popover class="popover" title="Title">
        <template slot="content">
            <div class="popover-content">
                <p class="a">Content</p>
                <p class="a">Content</p>
            </div>
        </template>
        <Button type="primary">Hover me</Button>
    </Popover>
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
