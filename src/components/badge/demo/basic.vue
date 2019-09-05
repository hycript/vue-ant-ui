<template>
<div class="demo">
    <Badge count="5">
        <a href="#" class="head-example"></a>
    </Badge>
    <Badge count="0" showZero>
        <a href="#" class="head-example"></a>
    </Badge>
    <Badge>
        <Icon slot="count" type="clock-circle" style="color: #f5222d" />
        <a href="#" class="head-example"></a>
    </Badge>
</div>
</template>
<script>
import Badge from '../badge';
export default {
    /* vuepree 默认组件包含 Badge 的缘故，该demo改为手动引入组件。 */
    components: {
        Badge,
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
