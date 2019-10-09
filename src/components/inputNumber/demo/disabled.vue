<template>
    <div>
        <vInputNumber :min="1" :max="10" :disabled="disabled" :defaultValue="3" />
        <div style="marginTop:20px">
            <vButton @click="toggle" type="primary">Toggle disabled</vButton>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            disabled: true,
        }
    },
    methods: {
        toggle() {
            this.disabled = !this.disabled
        }
    },
}
</script>
