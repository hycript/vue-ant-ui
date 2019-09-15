<template>
<div>
    <vSwitch defaultChecked :disabled="disabled" style="margin-bottom:5px" />
    <br />
    <vButton type="primary" @click='onToggle'>Toggle disabled</vButton>
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
        onToggle() {
            this.disabled = !this.disabled
        }
    },
}
</script>
