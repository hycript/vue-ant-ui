<template>
    <vCheckbox @change="onChange">Checkbox</vCheckbox>
</template>
<script>
export default {
    methods: {
        onChange(e) {
            console.log(`checked = ${e.target.checked}`)
        },
    },
}
</script>
