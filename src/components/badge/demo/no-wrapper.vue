<template>
<div class="demo">
    <vBadge count="25" />
    <vBadge count="4"
        :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
    <vBadge count="109" :numberStyle="{backgroundColor: '#52c41a'} " />
</div>
</template>
<style lang="less" scoped>
.demo{
    ::v-deep .ant-badge{
        margin-right: 8px;
    }
}
</style>
