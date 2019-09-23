<template>
    <vButton @click="success">Display a loading indicator</vButton>
</template>
<script>
export default {
    methods: {
        success() {
            const hide = this.$message.loading('Action in progress..', 0);
            setTimeout(hide, 2500);
        },
    }
}
</script>
