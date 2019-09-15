<template>
    <div id="components-a-popconfirm-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
            <vPopconfirm placement="topLeft" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>TL</vButton>
            </vPopconfirm>
            <vPopconfirm placement="top" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>Top</vButton>
            </vPopconfirm>
            <vPopconfirm placement="topRight" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>TR</vButton>
            </vPopconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
            <vPopconfirm placement="leftTop" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>LT</vButton>
            </vPopconfirm>
            <vPopconfirm placement="left" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>Left</vButton>
            </vPopconfirm>
            <vPopconfirm placement="leftBottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>LB</vButton>
            </vPopconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
            <vPopconfirm placement="rightTop" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>RT</vButton>
            </vPopconfirm>
            <vPopconfirm placement="right" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>Right</vButton>
            </vPopconfirm>
            <vPopconfirm placement="rightBottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>RB</vButton>
            </vPopconfirm>
        </div>
        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
            <vPopconfirm placement="bottomLeft" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>BL</vButton>
            </vPopconfirm>
            <vPopconfirm placement="bottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>Bottom</vButton>
            </vPopconfirm>
            <vPopconfirm placement="bottomRight" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <vButton>BR</vButton>
            </vPopconfirm>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            buttonWidth: 70
        };
    },
    methods: {
        confirm() {
            console.log('Click on Yes.');
        }
    }
};
</script>
<style lang="less" scoped>
#components-a-popconfirm-demo-placement {
    .ant-popover-wrapper{
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
