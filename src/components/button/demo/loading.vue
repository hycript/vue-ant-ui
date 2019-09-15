<template>
<div>
    <vButton type="primary" loading>
        Loading
    </vButton>
    <vButton type="primary" size="small" loading>
        Loading
    </vButton>
    <br><br>
    <vButton type="primary" :loading="loading" @mouseenter="enterLoading">
        mouseenter me!
    </vButton>
    <vButton type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
        延迟1s
    </vButton>
    <br><br>
    <vButton shape="circle" loading />
    <vButton type="primary" shape="circle" loading />
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
