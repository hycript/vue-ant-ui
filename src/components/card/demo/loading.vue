<template>
<div>
    <vCard :loading="loading" title="Card title">
        whatever content
    </vCard>
    <vButton @click="handleClick" style="marginTop: 16px">Toggle loading</vButton>
</div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
        }
    },
    methods: {
        handleClick() {
            this.loading = !this.loading
        }
    },
}
</script>
