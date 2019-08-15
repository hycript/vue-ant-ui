<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" @click="onClick">
    <slot></slot>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import vTransition from '../transition/transition';

export default {
    name: 'CheckableTag',
    model: {
        prop: 'checked',
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tag'),
        checked: PropTypes.bool.def(false),
    },
    computed: {
        classes(){
            const { prefixCls, checked } = this
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-checkable`]: true,
                [`${prefixCls}-checkable-checked`]: checked,
            }
        },
    },
    methods: {
        onClick(){
            const { checked } = this
            this.$emit('input', !checked);
            this.$emit('change', !checked);
        }
    }
}
</script>
