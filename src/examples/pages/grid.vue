<style lang="less" scoped>
@import '../style/common.less';
.demo-row {
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0;
    }
    background-image: -webkit-gradient(linear, left top, right top, color-stop(4.16666667%, #f5f5f5), color-stop(4.16666667%, transparent), color-stop(8.33333333%, transparent), color-stop(8.33333333%, #f5f5f5), color-stop(12.5%, #f5f5f5), color-stop(12.5%, transparent), color-stop(16.66666667%, transparent), color-stop(16.66666667%, #f5f5f5), color-stop(20.83333333%, #f5f5f5), color-stop(20.83333333%, transparent), color-stop(25%, transparent), color-stop(25%, #f5f5f5), color-stop(29.16666667%, #f5f5f5), color-stop(29.16666667%, transparent), color-stop(33.33333333%, transparent), color-stop(33.33333333%, #f5f5f5), color-stop(37.5%, #f5f5f5), color-stop(37.5%, transparent), color-stop(41.66666667%, transparent), color-stop(41.66666667%, #f5f5f5), color-stop(45.83333333%, #f5f5f5), color-stop(45.83333333%, transparent), color-stop(50%, transparent), color-stop(50%, #f5f5f5), color-stop(54.16666667%, #f5f5f5), color-stop(54.16666667%, transparent), color-stop(58.33333333%, transparent), color-stop(58.33333333%, #f5f5f5), color-stop(62.5%, #f5f5f5), color-stop(62.5%, transparent), color-stop(66.66666667%, transparent), color-stop(66.66666667%, #f5f5f5), color-stop(70.83333333%, #f5f5f5), color-stop(70.83333333%, transparent), color-stop(75%, transparent), color-stop(75%, #f5f5f5), color-stop(79.16666667%, #f5f5f5), color-stop(79.16666667%, transparent), color-stop(83.33333333%, transparent), color-stop(83.33333333%, #f5f5f5), color-stop(87.5%, #f5f5f5), color-stop(87.5%, transparent), color-stop(91.66666667%, transparent), color-stop(91.66666667%, #f5f5f5), color-stop(95.83333333%, #f5f5f5), color-stop(95.83333333%, transparent));
    background-image: -webkit-linear-gradient(left, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);
    background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 0, transparent 8.33333333%, #f5f5f5 0, #f5f5f5 12.5%, transparent 0, transparent 16.66666667%, #f5f5f5 0, #f5f5f5 20.83333333%, transparent 0, transparent 25%, #f5f5f5 0, #f5f5f5 29.16666667%, transparent 0, transparent 33.33333333%, #f5f5f5 0, #f5f5f5 37.5%, transparent 0, transparent 41.66666667%, #f5f5f5 0, #f5f5f5 45.83333333%, transparent 0, transparent 50%, #f5f5f5 0, #f5f5f5 54.16666667%, transparent 0, transparent 58.33333333%, #f5f5f5 0, #f5f5f5 62.5%, transparent 0, transparent 66.66666667%, #f5f5f5 0, #f5f5f5 70.83333333%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5 79.16666667%, transparent 0, transparent 83.33333333%, #f5f5f5 0, #f5f5f5 87.5%, transparent 0, transparent 91.66666667%, #f5f5f5 0, #f5f5f5 95.83333333%, transparent 0);
}
.demo-col {
    padding: 30px 0;
    font-size: 18px;
    text-align: center;
    color: #fff;
    background: rgba(0, 160, 233, .7);
}
.demo-light {
    background: rgba(0, 160, 233, .5);
}
.demo-none {
    background: hsla(0, 0%, 100%, .2);
    color: #999;
}

</style>
<template>
<Page title="Grid 栅格">
    <Box>
        <p class="title">基础栅格</p>
        <p>从堆叠到水平排列。<br />使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</p>
        <Row class="demo-row">
            <Col class="demo-col" span="12">col-12</Col>
            <Col class="demo-col demo-light" span="12">col-12</Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col demo-light" :span="8">col-8</Col>
            <Col class="demo-col demo-none" :span="8">col-8</Col>
            <Col class="demo-col demo-light" :span="8">col-8</Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col" :span="6">col-6</Col>
            <Col class="demo-col demo-light" :span="6">col-6</Col>
            <Col class="demo-col" :span="6">col-6</Col>
            <Col class="demo-col demo-light" :span="6">col-6</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">区块间隔</p>
        <p>
            栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)<br />
            如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。
        </p>
        <!-- <Row :gutter="16"> -->
        <Row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
            <Col :span="6">
                <div class="demo-col">gutter-16</div>
            </Col>
            <Col :span="6">
                <div class="demo-col">gutter-16</div>
            </Col>
            <Col :span="6">
                <div class="demo-col">gutter-16</div>
            </Col>
            <Col :span="6">
                <div class="demo-col">gutter-16</div>
            </Col>
        </Row>
    </Box>
    <Box>
        <p class="title">左右偏移</p>
        <p>列偏移。<br /> 使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。</p>
        <Row class="demo-row">
            <Col class="demo-col" :span="8">col-8</Col>
            <Col class="demo-col" :span="8" :offset="8">col-8</Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col" :span="6" :offset="6">col-6 col-offset-6</Col>
            <Col class="demo-col" :span="6" :offset="6">col-6 col-offset-6</Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col" :span="12" :offset="6">col-12 col-offset-6</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">栅格排序</p>
        <p>列排序。<br /> 通过使用 push 和 pull 类就可以很容易的改变列（column）的顺序。</p>
        <Row class="demo-row">
            <Col class="demo-col" :span="18" :push="6">col-18 col-push-6</Col>
            <Col class="demo-col demo-light" :span="6" :pull="18">col-6 col-pull-18</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">Flex 布局</p>
        <p>
            Flex 布局基础。<br />
            使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。
        </p>
        <p>sub-element align left</p>
        <Row class="demo-row" type="flex" justify="start">
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
        </Row>
        <p>sub-element align center</p>
        <Row class="demo-row" type="flex" justify="center">
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
        </Row>
        <p>sub-element align right</p>
        <Row class="demo-row" type="flex" justify="end">
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
        </Row>
        <p>sub-element monospaced arrangement</p>
        <Row class="demo-row" type="flex" justify="space-between">
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
        </Row>
        <p>sub-element align full</p>
        <Row class="demo-row" type="flex" justify="space-around">
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
            <Col class="demo-col" :span="4">col-4</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">Flex 对齐</p>
        <p>Flex 子元素垂直对齐。</p>
        <p>Align Top</p>
        <Row class="demo-row" type="flex" justify="center" align="top">
            <Col class="demo-col" :span="4"><div style="height: 100px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 50px;">col-4</div></Col>
            <Col class="demo-col" :span="4"><div style="height: 120px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 80px;">col-4</div></Col>
        </Row>

        <p>Align Center</p>
        <Row class="demo-row" type="flex" justify="space-around" align="middle">
            <Col class="demo-col" :span="4"><div style="height: 100px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 50px;">col-4</div></Col>
            <Col class="demo-col" :span="4"><div style="height: 120px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 80px;">col-4</div></Col>
        </Row>

        <p>Align Bottom</p>
        <Row class="demo-row" type="flex" justify="space-between" align="bottom">
            <Col class="demo-col" :span="4"><div style="height: 100px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 50px;">col-4</div></Col>
            <Col class="demo-col" :span="4"><div style="height: 120px;">col-4</div></Col>
            <Col class="demo-col demo-light" :span="4"><div style="height: 80px;">col-4</div></Col>
        </Row>
    </Box>
    <Box>
        <p class="title">Flex排序</p>
        <p>通过 Flex 布局的 Order 来改变元素的排序。</p>
        <Row class="demo-row" type="flex">
            <Col class="demo-col" :span="6" :order="4">1 col-order-4</Col>
            <Col class="demo-col demo-light" :span="6" :order="3">2 col-order-3</Col>
            <Col class="demo-col" :span="6" :order="2">3 col-order-2</Col>
            <Col class="demo-col demo-light" :span="6" :order="1">4 col-order-1</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">响应式布局</p>
        <p>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl  xxl。</p>
        <Row class="demo-row">
            <Col class="demo-col" :xs="8" :sm="4" :md="6" :lg="8" :xl="10">Col</Col>
            <Col class="demo-col demo-light" :xs="8" :sm="16" :md="12" :lg="8" :xl="4">Col</Col>
            <Col class="demo-col" :xs="8" :sm="4" :md="6" :lg="8" :xl="10">Col</Col>
        </Row>
    </Box>
    <Box>
        <p class="title">其他属性的响应式</p>
        <p> span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。<br />其中 xs={6} 相当于 xs={ { span: 6 } }。</p>
        <Row class="demo-row">
            <Col class="demo-col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col class="demo-col demo-light" :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col class="demo-col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        </Row>
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
    }
}
</script>
