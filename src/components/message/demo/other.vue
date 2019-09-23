<template>
<div>
    <vButton @click="success">Success</vButton>
    <vButton @click="error">Error</vButton>
    <vButton @click="warning">Warning</vButton>
</div>
</template>
<script>
export default {
    methods: {
        success() {
            this.$message.success('This is a message of success');
        },
        error() {
            this.$message.error('This is a message of error');
        },
        warning() {
            this.$message.warning('This is message of warning');
        },
    }
}
</script>
