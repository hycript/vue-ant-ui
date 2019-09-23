<template>
    <vButton @click="success">Customized display duration</vButton>
</template>
<script>
export default {
    methods: {
        success() {
            this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
        },
    }
}
</script>
