<template>
<div class="demo">
    <div>
        <Badge :count="count">
            <a href="#" class="head-example" />
        </Badge>
        <ButtonGroup>
            <Button @click="dec">
                <Icon type="minus" />
            </Button>
            <Button @click="inc">
                <Icon type="plus" />
            </Button>
        </ButtonGroup>
    </div>
    <div style="margin-top: 10px">
        <Badge :dot="show">
            <a href="#" class="head-example" />
        </Badge>
        <Button @click="show = !show">
            <Icon :type="show ? 'close' : 'eye'" />
        </Button>
    </div>
</div>
</template>
<script>
import Badge from '../badge';
export default {
    /* vuepree 默认组件包含 Badge 的缘故，该demo改为手动引入组件。 */
    components: {
        Badge,
    },
    data() {
        return {
            count: 5,
            show: true,
        }
    },
    methods: {
        dec() {
            let count = this.count - 1
            if (count < 0) {
                count = 0
            }
            this.count = count
        },
        inc() {
            this.count++
        },
    }
}
</script>
<style lang="less" scoped>
.demo{
    ::v-deep .head-example{
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
        vertical-align: middle;
    }
    ::v-deep .ant-badge:not(.ant-badge-not-a-wrapper){
        margin-right: 20px;
    }
}
</style>
