<template>
<div :class="classes" key="loading">
    <vnode v-if="$slots.default" :class="`${prefixCls}-dot`">
        <slot></slot>
    </vnode>
    <span v-else :class="[`${prefixCls}-dot`, `${prefixCls}-dot-spin`]">
        <i v-for="i in 4" :key="i" />
    </span>
    <div v-if="tip" :class="`${prefixCls}-text`">
        <slot name="tip">{{ tip }}</slot>
    </div>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import vnode from '../common/vnode';

export default {
    name: 'SpinInner',
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-spin'),
        spinning: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'default', 'large']).def('default'),
        tip: PropTypes.string,
    },
    computed: {
        classes(){
            const { prefixCls, size, spinning, tip } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-spinning`]: spinning,
                [`${prefixCls}-show-text`]: !!tip,
            }
        },
    }
}
</script>
