<template>
<div>
    <vAlert message="Success Tips" type="success" showIcon />
    <vAlert message="Informational Notes" type="info" showIcon />
    <vAlert message="Warning" type="warning" showIcon />
    <vAlert message="Error" type="error" showIcon />
    <vAlert
        message="Success Tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        showIcon
    />
    <vAlert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        showIcon
    />
    <vAlert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
    />
    <vAlert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
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
