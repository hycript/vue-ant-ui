<template>
    <div>
        <vInputNumber :min="1" :max="10" v-model="value" tabIndex="1" @pressEnter="log" @change="onChange" />
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
        log(value){
            console.log('pressenter', value);
        }
    },
}
</script>
