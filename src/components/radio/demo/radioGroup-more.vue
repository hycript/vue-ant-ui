<template>
    <vRadioGroup @change="onChange" v-model="value">
        <vRadio :style="radioStyle" :value="1">Option A</vRadio>
        <vRadio :style="radioStyle" :value="2">Option B</vRadio>
        <vRadio :style="radioStyle" :value="3">Option C</vRadio>
        <vRadio :style="radioStyle" :value="4">
            More...
            <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
        </vRadio>
    </vRadioGroup>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
            radioStyle: {
                display: 'block',
                height: '30px',
                lineHeight: '30px'
            }
        };
    },
    methods: {
        onChange(e) {
            console.log('radio checked', e.target.value);
        }
    }
};
</script>
