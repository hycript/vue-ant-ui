<template>
<div>
    <vSwitch defaultChecked :disabled="disabled" style="margin-bottom:5px" />
    <br />
    <Button type="primary" @click='onToggle'>Toggle disabled</Button>
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
