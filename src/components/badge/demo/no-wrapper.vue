<template>
<div class="demo">
    <Badge count="25" />
    <Badge count="4"
        :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
    <Badge count="109" :numberStyle="{backgroundColor: '#52c41a'} " />
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
    ::v-deep .ant-badge{
        margin-right: 8px;
    }
}
</style>
