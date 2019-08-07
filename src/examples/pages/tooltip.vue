<style lang="less" scoped>
@import '../style/common.less';
.text {
    display: inline-block;
    margin-bottom: none;
}

.demo {
    .ant-tooltip-wrapper {
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

</style>
<template>
<Page class="page" title="Tooltip 文字提示">
    <Box>
        <p class="title">基本</p>
        <p>最简单的用法</p>
        <Tooltip title="Prompt Text">
            <p class="text">Tooltip will show when mouse enter.</p>
        </Tooltip>
        <!-- <Tooltip title="文字提示" placement="top" :trigger="['click']" :mouseLeaveDelay="0.3" arrowPointAtCenter>
            <p class="text">Tooltip will show when mouse enter.</p>
        </Tooltip> -->
    </Box>
    <Box>
        <p class="title">箭头指向</p>
        <p>设置了 arrowPointAtCenter 后, 箭头将指向目标元素的中心</p>
        <Tooltip placement="topLeft" title="title : topRight">
            <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="title : topRight title : topRight  title : topRight  title : topRight" arrowPointAtCenter style="margin-left: 15px;">
            <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
    </Box>
    <Box>
        <p class="title">位置</p>
        <p>位置有 12 个方向。</p>
        <div class="demo">
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <!-- <Row type="flex"  align="bottom"> -->
                        <Tooltip placement="topLeft" title="title : topLeft">
                            <Button>TL</Button>
                        </Tooltip>
                        <Tooltip placement="top" title="title : top">
                            <Button>Top</Button>
                        </Tooltip>
                        <Tooltip placement="topRight" title="title : topRight title : topRight  title : topRight  title : topRight" trigger="click">
                            <Button>TR</Button>
                        </Tooltip>
                    <!-- </div> -->
                </div>
                <div class="col" style="width:78px;"></div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;">
                    <div type="flex" align="bottom" style="flex-direction: column;">
                        <Tooltip placement="leftTop" title="title : leftTop">
                            <Button>LT</Button>
                        </Tooltip>
                        <Tooltip placement="left" title="title : left">
                            <Button>Left</Button>
                        </Tooltip>
                        <Tooltip placement="leftBottom" title="title : leftBottom">
                            <Button>LB</Button>
                        </Tooltip>
                    </div>
                </div>
                <div class="col" style="width:234px;"></div>
                <div class="col" style="width:78px;">
                    <div type="flex"  align="top" style="flex-direction: column;">
                        <Tooltip placement="rightTop" title="title : rightTop" trigger="click">
                            <Button>RT</Button>
                        </Tooltip>
                        <Tooltip placement="right" title="title : right">
                            <Button>Right</Button>
                        </Tooltip>
                        <Tooltip placement="rightBottom" title="title : rightBottom">
                            <Button>RB</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="col" style="width:78px;"></div>
                <div class="col" style="width:234px;">
                    <div class="flex">
                        <Tooltip placement="bottomLeft" title="title : bottomLeft">
                            <Button>BL</Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="title : bottom">
                            <Button>Bottom</Button>
                        </Tooltip>
                        <Tooltip placement="bottomRight" title="title : bottomRight">
                            <Button>BR</Button>
                        </Tooltip>
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
                <Tooltip placement="topLeft" title="Propmt Text" trigger="contextmenu">
                    <Button>右键/contextmenu</Button>
                </Tooltip>
            </div>
            <br>
            <div>
                <Tooltip placement="topRight" title="title : rightBottom" trigger="click">
                    <Button>click</Button>
                </Tooltip>
            </div>
            <br>
            <div>
                <Tooltip placement="topLeft" title="Propmt Text" trigger="focus">
                    <!-- <input class="inp" type="text" placeholder="focus"></input> -->
                    <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus"></input>
                </Tooltip>
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
