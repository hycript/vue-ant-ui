<style lang="less" scoped>
@import '../style/common.less';

.ant-layout-content {
    min-height: 120px;
    line-height: 120px;
    background: rgba(16, 142, 233, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.ant-layout-footer {
    padding: 24px 50px;
    font-size: 14px;
    background: #7dbcea;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.ant-layout-header {
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
    background: #7dbcea;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.ant-layout-sider {
    line-height: 120px;
    background: #3ba0e9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.btn-sider {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
}
</style>
<template>
<Page class="page" title="Layout 布局">
    <Box>
        <p class="title">设计规则</p>
        <p>
            <span class="subtit">尺寸</span>
            <br />
            一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。
            <ul>
                <li>顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。</li>
                <li>顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。</li>
                <li>顶部导航高度的范围计算公式为：48+8n。</li>
                <li>侧边导航宽度的范围计算公式：200+8n。</li>
            </ul>
        </p>
        <p>
            <span class="subtit">交互</span>
            <ul>
                <li>一级导航和末级的导航需要在可视化的层面被强调出来；</li>
                <li>当前项应该在呈现上优先级最高；</li>
                <li>当导航收起的时候，当前项的样式自动赋予给它的上一个层级；</li>
                <li>左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。</li>
            </ul>
        </p>
        <p>
            <span class="subtit">视觉</span>
            <br />
            导航样式上需要根据信息层级合理的选择样式：
            <ul>
                <li>大色块强调<br />建议用于底色为深色系时，当前页面父级的导航项。</li>
                <li>高亮火柴棍<br />当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。</li>
                <li>字体高亮变色<br />从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。</li>
                <li>字体放大<br />12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。</li>
            </ul>
        </p>
    </Box>
    <Box>
        <p class="title">组件概述</p>
        <p>
            <ul>
                <li>Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。</li>
                <li>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
                <li>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</li>
                <li>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
                <li>Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
            </ul>
        </p>
        <p>注意：采用 flex 布局实现，请注意浏览器兼容性问题。</p>
    </Box>
    <Box>
        <p class="title">代码演示</p>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
        <p></p>
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
        <p></p>
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
        <p></p>
        <Layout>
            <Sider ref="sider">
                <template slot-scope="{ collapsed, toggle }">
                    <Button class="btn-sider" type="dashed" :icon="collapsed ? 'menu-unfold' : 'menu-fold'" @click.stop="toggle"></Button>
                </template>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
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
