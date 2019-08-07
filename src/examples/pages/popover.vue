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

</style>
<template>
<Page class="page" title="Popover 气泡卡片">
    <Box>
        <p class="title">基本</p>
        <p>最简单的用法，浮层的大小由内容区域决定。</p>
        <Popover title="Prompt Title" content="Prompt Content">
            <Button type="primary" class="text">Hover me</Button>
            <div slot="content" class="content">
                <p>Content</p>
                <p>Content</p>
            </div>
        </Popover>
    </Box>
    <Box>
        <p class="title">从浮层关闭</p>
        <p>使用 visible 属性控制浮层显示。</p>
        <Popover title="Prompt Title" content="Prompt Content" trigger="click">
            <Button type="primary" class="text">Click me</Button>
            <div slot="content" class="content"  slot-scope="{ show, hide, visible }">
                <Button @click="hide" icon="close" type="danger"></Button>
            </div>
        </Popover>
    </Box>
    <Box>
        <p class="title">箭头指向</p>
        <p>设置了 arrowPointAtCenter 后, 箭头将指向目标元素的中心</p>
        <Popover placement="topLeft" title="Prompt Title" content="title : topRight">
            <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover placement="topLeft" title="Prompt Title" content="title : topRight title : topRight  title : topRight  title : topRight" arrowPointAtCenter style="margin-left: 15px;">
            <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
    </Box>
    <Box>
        <p class="title">位置</p>
        <p>位置有 12 个方向。</p>
        <div class="demo">
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <!-- <Row type="flex"  align="bottom"> -->
                        <Popover placement="topLeft" title="title" content="title : topLeft">
                            <Button>TL</Button>
                        </Popover>
                        <Popover placement="top" title="title" content="title : top">
                            <Button>Top</Button>
                        </Popover>
                        <Popover placement="topRight" title="title" content="title : topRight title : topRight  title : topRight  title : topRight" trigger="click">
                            <Button>TR</Button>
                        </Popover>
                    <!-- </div> -->
                </div>
                <div class="col" style="width:78px;"></div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;">
                    <div type="flex" align="bottom" style="flex-direction: column;">
                        <Popover placement="leftTop" title="title" content="title : leftTop">
                            <Button>LT</Button>
                        </Popover>
                        <Popover placement="left" title="title" content="title : left">
                            <Button>Left</Button>
                        </Popover>
                        <Popover placement="leftBottom" title="title" content="title : leftBottom">
                            <Button>LB</Button>
                        </Popover>
                    </div>
                </div>
                <div class="col" style="width:234px;"></div>
                <div class="col" style="width:78px;">
                    <div type="flex"  align="top" style="flex-direction: column;">
                        <Popover placement="rightTop" title="title" content="title : rightTop" trigger="click">
                            <Button>RT</Button>
                        </Popover>
                        <Popover placement="right" title="title" content="title : right">
                            <Button>Right</Button>
                        </Popover>
                        <Popover placement="rightBottom" title="title" content="title : rightBottom">
                            <Button>RB</Button>
                        </Popover>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <div class="flex">
                        <Popover placement="bottomLeft" title="title" content="title : bottomLeft">
                            <Button>BL</Button>
                        </Popover>
                        <Popover placement="bottom" title="title" content="title : bottom">
                            <Button>Bottom</Button>
                        </Popover>
                        <Popover placement="bottomRight" title="title" content="title : bottomRight">
                            <Button>BR</Button>
                        </Popover>
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
                <Popover placement="topLeft" title="title" content="Propmt Text" trigger="contextmenu">
                    <Button>右键/contextmenu</Button>
                </Popover>
            </div>
            <br>
            <div>
                <Popover placement="topRight" title="title" content="title : rightBottom" trigger="click">
                    <Button>click</Button>
                </Popover>
            </div>
            <br>
            <div>
                <Popover placement="topLeft" title="title" content="Propmt Text" trigger="focus">
                    <!-- <input class="inp" type="text" placeholder="focus"></input> -->
                    <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus"></input>
                </Popover>
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
