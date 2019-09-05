<template>
<div class="demo">
    <Badge dot>
        <Icon type="notification" />
    </Badge>
    <Badge :count="0" dot>
        <Icon type="notification" />
    </Badge>
    <Badge dot>
        <a href="#">Link something</a>
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
    .demo {
        ::v-deep .ant-badge {
            margin-right: 8px;
        }
    }

</style>
