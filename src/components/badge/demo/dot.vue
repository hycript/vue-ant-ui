<template>
<div class="demo">
    <vBadge dot>
        <vIcon type="notification" />
    </vBadge>
    <vBadge :count="0" dot>
        <vIcon type="notification" />
    </vBadge>
    <vBadge dot>
        <a href="#">Link something</a>
    </vBadge>
</div>
</template>
<style lang="less" scoped>
    .demo {
        ::v-deep .ant-badge {
            margin-right: 8px;
        }
    }

</style>
