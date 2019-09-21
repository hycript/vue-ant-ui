<template>
<div>
    <vAlert message="Success Text" type="success" />
    <vAlert message="Info Text" type="info" />
    <vAlert message="Warning Text" type="warning" />
    <vAlert message="Error Text" type="error" />
</div>
</template>
<style lang="less" scoped>
.ant-alert{
    margin-bottom: 16px;
    &:last-child{
        margin-bottom: 0;
    }
}
</style>
