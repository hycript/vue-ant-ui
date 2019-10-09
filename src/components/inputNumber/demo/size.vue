<template>
    <div>
        <vInputNumber size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
        <vInputNumber :min="1" :max="100000" :defaultValue="3" @change="onChange" />
        <vInputNumber size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
    </div>
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
<style scoped>
.ant-input-number {
    margin-right: 10px;
}
</style>
