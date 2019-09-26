<template>
    <div>
        <vRadio :defaultChecked="false" :disabled="disabled">Disabled</vRadio>
        <br />
        <vRadio defaultChecked :disabled="disabled">Disabled</vRadio>
        <div :style="{ marginTop: 20 }">
            <vButton type="primary" @click="toggleDisabled">
                Toggle disabled
            </vButton>
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
        toggleDisabled() {
            this.disabled = !this.disabled
        },
    },
}
</script>
