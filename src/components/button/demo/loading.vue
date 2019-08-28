<template>
<div>
    <Button type="primary" loading>
        Loading
    </Button>
    <Button type="primary" size="small" loading>
        Loading
    </Button>
    <br><br>
    <Button type="primary" :loading="loading" @mouseenter="enterLoading">
        mouseenter me!
    </Button>
    <Button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
        延迟1s
    </Button>
    <br><br>
    <Button shape="circle" loading />
    <Button type="primary" shape="circle" loading />
</div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            iconLoading: false,
        }
    },
    methods: {
        enterLoading() {
            this.loading = true
        },
        enterIconLoading() {
            this.iconLoading = {
                delay: 1000
            }
        },
    },
}
</script>
