<style lang="less" scoped>
@import '../style/common.less';
.page {
    height: 3000px;
    .markdown {
        padding-left: 20px;
    }
    .bottom-affix {
        margin-top: 400px;
    }
}
.scrollable-container {
    height: 100px;
    overflow-y: scroll;
    .background {
        padding-top: 60px;
        height: 300px;
        background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
    }
}
.target-bottom {
    margin-top: 300px;
}
</style>
<template>
<Page class="page" title="Affix 固钉">
    <div class="markdown">
        <p>将页面元素钉在可视范围。</p>
        <h2><span>何时使用</span></h2>
        <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
        <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
    </div>
    <Box>
        <Affix>
            <Button type="primary">Affix top</Button>
        </Affix>
    </Box>
    <Box>
        <Affix :offsetTop="120" @change="change">
            <Button>120px to affix top</Button>
        </Affix>
    </Box>
    <Box>
        <div class="scrollable-container" ref="container">
            <div class="background">
                <Affix :target="() => this.$refs.container">
                    <Button type="primary">
                    Fixed at the top of container
                    </Button>
                </Affix>
            </div>
        </div>
    </Box>
    <Box>
        <div class="scrollable-container" ref="containerBottom">
            <div class="background">
                <Affix class="target-bottom" :offsetBottom="0" :target="() => this.$refs.containerBottom">
                    <Button type="primary">
                    Fixed at the bottom of container
                    </Button>
                </Affix>
            </div>
        </div>
    </Box>
    <Box class="bottom-affix">
        <Affix :offsetBottom="0">
            <Button type="primary">Affix bottom</Button>
        </Affix>
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
        change(affixed) {
            console.log(affixed)
        },
    },
}
</script>
