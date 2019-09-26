<template>
    <div>
        <p :style="{ marginBottom: '20px' }">
            <vCheckbox :checked="checked" :disabled="disabled" @change="onChange">
                {{label}}
            </vCheckbox>
        </p>
        <p>
            <vButton type="primary" size="small" @click="toggleChecked">
                {{!checked ? 'Check' : 'Uncheck'}}
            </vButton>
            <vButton :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
                {{!disabled ? 'Disable' : 'Enable'}}
            </vButton>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: true,
            disabled: false,
        }
    },
    computed: {
        label() {
            const {
                checked,
                disabled
            } = this
            return `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`
        },
    },
    methods: {
        toggleChecked() {
            this.checked = !this.checked
        },
        toggleDisable() {
            this.disabled = !this.disabled
        },
        onChange(e) {
            this.checked = e.target.checked
        },
    },
}
</script>
