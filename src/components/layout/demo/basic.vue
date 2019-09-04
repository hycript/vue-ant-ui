<template>
<div class="demo">
    <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>
</template>
<script>
import comps from '../index';

const { Layout, Header, Footer, Content, Sider } = comps;

export default {
    /* vuepree 默认组件包含 Layout, Header, Footer, Content 的缘故，该demo改为手动引入组件。 */
    components: {
        Layout,
        Header,
        Footer,
        Content,
        Sider,
    }
}
</script>
<style lang="less" scoped>
.demo{
    text-align: center;
    /deep/ .ant-layout {
        .ant-layout-header,
        .ant-layout-footer {
            background: #7dbcea;
            color: #fff;
        }

        .ant-layout-footer {
           line-height: 1.5;
        }

        .ant-layout-sider {
            background: #3ba0e9;
            color: #fff;
            line-height: 120px;
        }

        .ant-layout-content {
            background: rgba(16, 142, 233, 1);
            color: #fff;
            min-height: 120px;
            line-height: 120px;
        }
    }

    ::v-deep >.ant-layout{
        margin-bottom: 48px;
        &:last-child {
            margin: 0;
        }
    }
}
</style>
