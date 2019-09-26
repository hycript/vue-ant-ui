<template>
    <div>
        <vCheckboxGroup :options="plainOptions" v-model="value" @change="onChange" />
        <br />
        <vCheckboxGroup :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
        <br />
        <vCheckboxGroup :options="options" :value="['Pear']" @change="onChange" />
        <br />
        <vCheckboxGroup :options="optionsWithDisabled" disabled :defaultValue="['Apple']" @change="onChange">
            <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
        </vCheckboxGroup>
    </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
    {
        label: 'Apple',
        value: 'Apple'
    },
    {
        label: 'Pear',
        value: 'Pear'
    },
    {
        label: 'Orange',
        value: 'Orange'
    },
]
const optionsWithDisabled = [
    {
        value: 'Apple'
    },
    {
        label: 'Pear',
        value: 'Pear'
    },
    {
        label: 'Orange',
        value: 'Orange',
        disabled: false
    },
]
export default {
    data() {
        return {
            plainOptions,
            options,
            optionsWithDisabled,
            value: [],
        }
    },
    methods: {
        onChange(checkedValues) {
            console.log('checked = ', checkedValues)
            console.log('value = ', this.value)
        },
    },
}

</script>
