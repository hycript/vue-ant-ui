<template>
<div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <vPopover placement="topLeft">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>TL</vButton>
        </vPopover>
        <vPopover placement="top">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>Top</vButton>
        </vPopover>
        <vPopover placement="topRight">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>TR</vButton>
        </vPopover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <vPopover placement="leftTop">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>LT</vButton>
        </vPopover>
        <vPopover placement="left">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>Left</vButton>
        </vPopover>
        <vPopover placement="leftBottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>LB</vButton>
        </vPopover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <vPopover placement="rightTop">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>RT</vButton>
        </vPopover>
        <vPopover placement="right">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>Right</vButton>
        </vPopover>
        <vPopover placement="rightBottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>RB</vButton>
        </vPopover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <vPopover placement="bottomLeft">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>BL</vButton>
        </vPopover>
        <vPopover placement="bottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>Bottom</vButton>
        </vPopover>
        <vPopover placement="bottomRight">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <vButton>BR</vButton>
        </vPopover>
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
#components-popover-demo-placement{
    .ant-popover-wrapper {
        padding: 0;
        margin-right: 8px;
        margin-bottom: 8px;
    }
    .ant-btn {
        width: 70px;
        text-align: center;
    }
}
p:last-child{
    margin-bottom: 0;
}
</style>
