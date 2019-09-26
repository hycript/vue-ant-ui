<template>
<div>
    <vRadioGroup @change="onChange" v-model="value">
        <vRadio :value="1">A</vRadio>
        <vRadio :value="2">B</vRadio>
        <vRadio :value="3">C</vRadio>
        <vRadio :value="4">D</vRadio>
    </vRadioGroup>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 1
        };
    },
    methods: {
        onChange(e) {
            console.log('radio checked', e.target.value);
        }
    }
};
</script>
