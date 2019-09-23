<template>
    <vButton type="primary" @click="info">Display normal message</vButton>
</template>
<script>
export default {
    methods: {
        info() {
            this.$message.info('This is a normal message');
        },
    }
}
</script>
