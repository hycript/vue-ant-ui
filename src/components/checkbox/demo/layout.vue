<template>
<vCheckboxGroup @change="onChange">
    <vRow>
        <vCol :span="8">
            <vCheckbox value="A">A</vCheckbox>
        </vCol>
        <vCol :span="8">
            <vCheckbox value="B">B</vCheckbox>
        </vCol>
        <vCol :span="8">
            <vCheckbox value="C">C</vCheckbox>
        </vCol>
        <vCol :span="8">
            <vCheckbox value="D">D</vCheckbox>
        </vCol>
        <vCol :span="8">
            <vCheckbox value="E">E</vCheckbox>
        </vCol>
    </vRow>
</vCheckboxGroup>
</template>
<script>
export default {
    methods: {
        onChange(checkedValues) {
            console.log('checked = ', checkedValues)
        },
    },
}
</script>
