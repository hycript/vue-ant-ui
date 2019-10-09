<template>
    <vInputNumber :min="0" :max="10" :step="0.1" @change="onChange" />
</template>
<script>
export default {
    methods: {
        onChange(value) {
            console.log('changed', value);
        },
    },
}
</script>
