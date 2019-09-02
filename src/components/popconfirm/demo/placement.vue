<template>
    <div id="components-a-popconfirm-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
            <Popconfirm placement="topLeft" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>TL</Button>
            </Popconfirm>
            <Popconfirm placement="top" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>Top</Button>
            </Popconfirm>
            <Popconfirm placement="topRight" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>TR</Button>
            </Popconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
            <Popconfirm placement="leftTop" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>LT</Button>
            </Popconfirm>
            <Popconfirm placement="left" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>Left</Button>
            </Popconfirm>
            <Popconfirm placement="leftBottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>LB</Button>
            </Popconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
            <Popconfirm placement="rightTop" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>RT</Button>
            </Popconfirm>
            <Popconfirm placement="right" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>Right</Button>
            </Popconfirm>
            <Popconfirm placement="rightBottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>RB</Button>
            </Popconfirm>
        </div>
        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
            <Popconfirm placement="bottomLeft" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>BL</Button>
            </Popconfirm>
            <Popconfirm placement="bottom" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>Bottom</Button>
            </Popconfirm>
            <Popconfirm placement="bottomRight" okText="Yes" cancelText="No" @confirm="confirm">
                <template slot="title">
                    <p>Are you sure delete this task?</p>
                    <p>Are you sure delete this task?</p>
                </template>
                <Button>BR</Button>
            </Popconfirm>
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
