<template>
<div>
    <vRadioGroup :options="plainOptions" @change="onChange1" :defaultValue="value1" />
    <br />
    <vRadioGroup :options="options" @change="onChange2" v-model="value2" />
    <br />
    <vRadioGroup
        :options="optionsWithDisabled"
        disabled
        @change="onChange3"
        v-model="value3"
    />
</div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false }
];
export default {
    data() {
        return {
            plainOptions,
            options,
            optionsWithDisabled,
            value1: 'Apple',
            value2: 'Apple',
            value3: 'Apple'
        };
    },
    methods: {
        onChange1(value) {
            console.log('radio1 checked', value);
        },
        onChange2(value) {
            console.log('radio2 checked', value);
        },
        onChange3(value) {
            console.log('radio3 checked', value);
        }
    }
};
</script>
