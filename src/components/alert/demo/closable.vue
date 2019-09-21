<template>
<div>
    <vAlert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        @close="onClose"
    />
    <vAlert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        @close="onClose"
    />
</div>
</template>
<script>
export default {
    methods: {
        onClose(e) {
            console.log(e, 'I was closed.');
        }
    }
};
</script>
<style lang="less" scoped>
.ant-alert{
    margin-bottom: 16px;
    &:last-child{
        margin-bottom: 0;
    }
}
</style>
