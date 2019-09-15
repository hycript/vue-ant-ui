<template>
<div class="demo">
    <vLayout>
        <vHeader>Header</vHeader>
        <vContent>Content</vContent>
        <vFooter>Footer</vFooter>
    </vLayout>

    <vLayout>
        <vHeader>Header</vHeader>
        <vLayout>
            <vSider>Sider</vSider>
            <vContent>Content</vContent>
        </vLayout>
        <vFooter>Footer</vFooter>
    </vLayout>

    <vLayout>
        <vHeader>Header</vHeader>
        <vLayout>
            <vContent>Content</vContent>
            <vSider>Sider</vSider>
        </vLayout>
        <vFooter>Footer</vFooter>
    </vLayout>

    <vLayout>
        <vSider>Sider</vSider>
        <vLayout>
            <vHeader>Header</vHeader>
            <vContent>Content</vContent>
            <vFooter>Footer</vFooter>
        </vLayout>
    </vLayout>
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
