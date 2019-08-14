<style lang="less">
@import '../style/index.less';
</style>
<template>
<i :class="classes" @click="click"></i>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'Icon',
    props: {
        type: PropTypes.string.isRequired,
        spin: PropTypes.bool.def(false),
    },
    computed: {
        classes(){
            const { type, spin } = this;
            return {
                anticon: true,
                'anticon-spin': !!spin || type === 'loading',
                [`anticon-${type}`]: true,
            };
        }
    },
    methods: {
        click($event){
            this.$emit('click', $event);
        }
    }
}
</script>
