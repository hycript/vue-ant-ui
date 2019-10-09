<template>
    <div>
        <vInputNumber :min="1" :precision="2" step="0.1" :max="10" v-model="value" @change="onChange" />
        当前值：{{value}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 3
        }
    },
    methods: {
        onChange(value) {
            console.log('changed', value);
        },
    },
}
</script>
