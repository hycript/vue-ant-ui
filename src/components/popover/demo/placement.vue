<template>
<div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <Popover placement="topLeft">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>TL</Button>
        </Popover>
        <Popover placement="top">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>Top</Button>
        </Popover>
        <Popover placement="topRight">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>TR</Button>
        </Popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <Popover placement="leftTop">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>LT</Button>
        </Popover>
        <Popover placement="left">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>Left</Button>
        </Popover>
        <Popover placement="leftBottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>LB</Button>
        </Popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <Popover placement="rightTop">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>RT</Button>
        </Popover>
        <Popover placement="right">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>Right</Button>
        </Popover>
        <Popover placement="rightBottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>RB</Button>
        </Popover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <Popover placement="bottomLeft">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>BL</Button>
        </Popover>
        <Popover placement="bottom">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight">
            <template slot="content">
                <p>Content</p>
                <p>Content</p>
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <Button>BR</Button>
        </Popover>
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
