<template>
<div>
<vInputNumber :min="1" :max="100" :step="0.1" :precision="2" defaultValue="0"
    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="value => value.replace(/\$\s?|(,*)/g, '')" :disabled="disabled"
></vInputNumber>
<vInputNumber
    :defaultValue="100"
    :min="0"
    :max="100"
    :formatter="value => `${value}%`"
    :parser="value => value.replace('%', '')"
></vInputNumber>
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
