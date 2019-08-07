<style lang="less" scoped>
@import '../style/common.less';
.text {
    display: inline-block;
    margin-bottom: none;
}

.demo {
    .ant-popover-wrapper {
        margin: 4px;
    }
    .ant-btn {
        width: 70px;
    }
    .ant-row {
        margin-left: 70px;
    }
    .col {
        display: inline-block;
    }
    & > .flex {
        margin-left: 70px;
    }
}

.inp {
    border: 1px solid red;
    padding: 6px;
    outline: none;
}

.demo-wrapper {
    display: flex;
    justify-content: flex-start;
}

.content{
    width: 150px;
    p {
        margin: 0 0 5px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}

.slot-title{
    width: 200px;
    display: inline-block;
    .anticon{
        color: red;
    }
}
</style>
<template>
<Page class="page" title="Popconfirm 气泡确认框">
    <Box>
        <p class="title">基本</p>
        <p>最简单的用法，浮层的大小由内容区域决定。</p>
        <Popconfirm title="Prompt Title" content="Prompt Content" okText="Yes" cancelText="No">
            <Button type="primary" class="text">Hover me</Button>
        </Popconfirm>
    </Box>
    <Box>
        <p class="title">箭头指向</p>
        <p>设置了 arrowPointAtCenter 后, 箭头将指向目标元素的中心</p>
        <Popconfirm placement="topLeft" title="Prompt Title">
            <Button>Align edge / 边缘对齐</Button>
        </Popconfirm>
        <Popconfirm placement="topRight" arrowPointAtCenter style="margin-left: 15px;">
            <Button>Arrow points to center / 箭头指向中心</Button>
            <div class="slot-title" slot="title">
                <Icon type="question"></Icon>
                title : topRight title : topRight  title : topRight  title : topRight
            </div>
        </Popconfirm>
    </Box>
    <Box>
        <p class="title">位置</p>
        <p>位置有 12 个方向。</p>
        <div class="demo">
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <!-- <Row type="flex"  align="bottom"> -->
                        <Popconfirm placement="topLeft"  title="title : topLeft">
                            <Button>TL</Button>
                        </Popconfirm>
                        <Popconfirm placement="top"  title="title : top">
                            <Button>Top</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight"  title="title : topRight title : topRight  title : topRight  title : topRight" trigger="click">
                            <Button>TR</Button>
                        </Popconfirm>
                    <!-- </div> -->
                </div>
                <div class="col" style="width:78px;"></div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;">
                    <div type="flex" align="bottom" style="flex-direction: column;">
                        <Popconfirm placement="leftTop"  title="title : leftTop">
                            <Button>LT</Button>
                        </Popconfirm>
                        <Popconfirm placement="left"  title="title : left">
                            <Button>Left</Button>
                        </Popconfirm>
                        <Popconfirm placement="leftBottom"  title="title : leftBottom">
                            <Button>LB</Button>
                        </Popconfirm>
                    </div>
                </div>
                <div class="col" style="width:234px;"></div>
                <div class="col" style="width:78px;">
                    <div type="flex"  align="top" style="flex-direction: column;">
                        <Popconfirm placement="rightTop"  title="title : rightTop" trigger="click">
                            <Button>RT</Button>
                        </Popconfirm>
                        <Popconfirm placement="right"  title="title : right">
                            <Button>Right</Button>
                        </Popconfirm>
                        <Popconfirm placement="rightBottom"  title="title : rightBottom">
                            <Button>RB</Button>
                        </Popconfirm>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <div class="flex">
                        <Popconfirm placement="bottomLeft"  title="title : bottomLeft">
                            <Button>BL</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottom"  title="title : bottom">
                            <Button>Bottom</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottomRight"  title="title : bottomRight">
                            <Button>BR</Button>
                        </Popconfirm>
                    </div>
                </div>
                <div class="col" style="width:78px;"></div>
            </div>
        </div>
    </Box>
    <Box>
        <p class="title">触发条件</p>
        <p>trigger: string | array ; eg: click, focus, hover, contextmenu</p>
        <!-- <div class="demo-wrapper"> -->
            <div>
                <Popconfirm placement="topLeft"  title="Propmt Text" trigger="contextmenu">
                    <Button>右键/contextmenu</Button>
                </Popconfirm>
            </div>
            <br>
            <div>
                <Popconfirm placement="topRight"  title="title : rightBottom" trigger="click">
                    <Button>click</Button>
                </Popconfirm>
            </div>
            <br>
            <div>
                <Popconfirm placement="topLeft"  title="Propmt Text" trigger="focus">
                    <!-- <input class="inp" type="text" placeholder="focus"></input> -->
                    <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus"></input>
                </Popconfirm>
            </div>
        <!-- </div> -->
    </Box>
</Page>
</template>
<script>
import Page from './common/page';
import Box from './common/box';
export default {
    components: {
        Page,
        Box,
    },
    methods: {
    },
}
</script>
