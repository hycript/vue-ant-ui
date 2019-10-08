<template>
<div>
<vInputNumber :min="1" :max="100" :step="0.1" :precision="2" :disabled="disabled"></vInputNumber>
<vButton @click="toggle" style="margin-left:10px;">toggle</vButton>
</div>
</template>
<script>
export default {
    data(){
        return {
            disabled: false,
        }
    },
    methods: {
        toggle(){
            this.disabled = !this.disabled;
        }
    }
}
</script>
