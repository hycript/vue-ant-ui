<template>
<div id="components-Tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <Tooltip placement="topLeft">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>TR</Button>
        </Tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <Tooltip placement="leftTop">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>LB</Button>
        </Tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <Tooltip placement="rightTop">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>RB</Button>
        </Tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <Tooltip placement="bottomLeft">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <Button>BR</Button>
        </Tooltip>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            buttonWidth: 70,
        }
    },
}
</script>
<style lang="less" scoped>
#components-Tooltip-demo-placement{
    .ant-tooltip-wrapper {
        text-align: center;
        padding: 0;
        margin-right: 8px;
        margin-bottom: 8px;
    }
    .ant-btn{
        width: 70px;
    }
}
</style>
