<template>
    <vRadioGroup @change="onChange" v-model="value">
        <vRadio :style="radioStyle" :value="1">Option A</vRadio>
        <vRadio :style="radioStyle" :value="2">Option B</vRadio>
        <vRadio :style="radioStyle" :value="3">Option C</vRadio>
        <vRadio :style="radioStyle" :value="4">
            More...
            <input class="input" v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
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
        onChange(value) {
            console.log('radio checked', value);
        }
    }
};
</script>
<style lang="less" scoped>
.input{
    width: 100px;
    margin-left: 10px;
    border-radius: 4px;
    padding: 4px 11px;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #d9d9d9;
}
</style>
