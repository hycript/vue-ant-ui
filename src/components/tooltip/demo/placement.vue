<template>
<div id="components-Tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <vTooltip placement="topLeft">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>TL</vButton>
        </vTooltip>
        <vTooltip placement="top">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>Top</vButton>
        </vTooltip>
        <vTooltip placement="topRight">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>TR</vButton>
        </vTooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <vTooltip placement="leftTop">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>LT</vButton>
        </vTooltip>
        <vTooltip placement="left">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>Left</vButton>
        </vTooltip>
        <vTooltip placement="leftBottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>LB</vButton>
        </vTooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <vTooltip placement="rightTop">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>RT</vButton>
        </vTooltip>
        <vTooltip placement="right">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>Right</vButton>
        </vTooltip>
        <vTooltip placement="rightBottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>RB</vButton>
        </vTooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <vTooltip placement="bottomLeft">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>BL</vButton>
        </vTooltip>
        <vTooltip placement="bottom">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>Bottom</vButton>
        </vTooltip>
        <vTooltip placement="bottomRight">
            <template slot="title">
                <span>prompt text</span>
            </template>
            <vButton>BR</vButton>
        </vTooltip>
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
