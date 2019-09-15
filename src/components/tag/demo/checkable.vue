<template>
<div>
    <vCheckableTag v-model="checked1" @change="handleChange">
        Tag1
    </vCheckableTag>
    <vCheckableTag v-model="checked2" @change="handleChange">
        Tag2
    </vCheckableTag>
    <vCheckableTag v-model="checked3" @change="handleChange">
        Tag3
    </vCheckableTag>
</div>
</template>
<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            checked3: false,
        }
    },
    methods: {
        handleChange(checked) {
            console.log(checked)
        },
    },
}
</script>
