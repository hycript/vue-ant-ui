<style lang="less" src="./style/index.less"></style>
<template>
    <div></div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import inputProps from './inputProps';

export default {
    name: 'InputSearch',
    inheritAttrs: false,
    data(){
        return {
        }
    },
    props: {
        ...inputProps,
        prefixCls: PropTypes.string.def('ant-input'),
    },
    computed: {
        classes(){
            const { prefixCls } = this;

            return {
                [`${prefixCls}`]: true,
            }
        },
    },
    methods: {
    }
}
</script>
