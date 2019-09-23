<template>
    <vButton @click="success">Display a sequence of message</vButton>
</template>
<script>
export default {
    methods: {
        success() {
            this.$message.loading('Action in progress..', 2.5)
                .then(() => this.$message.success('Loading finished', 2.5))
                .then(() => this.$message.info('Loading finished is finished', 2.5));
        },
    }
}
</script>
