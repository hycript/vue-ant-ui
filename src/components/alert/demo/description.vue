<template>
<div>
    <vAlert message="Success Text" type="success">
        <span slot="description">
            Success Description
            <span style="color: red">Success</span> Description Success Description
        </span>
    </vAlert>
    <vAlert
        message="Info Text"
        type="info"
    >
        <span>
            Info Description Info Description Info Description Info Description
        </span>
    </vAlert>
    <vAlert
        message="Warning Text"
        description="Warning Description Warning Description Warning Description Warning Description"
        type="warning"
    />
    <vAlert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
    />
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
