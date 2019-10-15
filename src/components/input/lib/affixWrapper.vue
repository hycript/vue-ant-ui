<template>
<span v-if="$slots.prefix || $slots.suffix || allowClear" :class="classes">
    <span v-if="$slots.prefix" :class="`${prefixCls}-prefix`">
        <slot name="prefix"></slot>
    </span>
    <slot></slot>
    <span v-if="$slots.suffix" :class="`${prefixCls}-suffix`">
        <slot name="suffix"></slot>
    </span>
</span>
<vnode v-else><slot></slot></vnode>
</template>
<script>
import vnode from '../../common/vnode';
import inputProps from '../inputProps';

export default {
    components: {
        vnode,
    },
    props: {
        ...inputProps,
    },
    computed: {
        classes(){
            const { prefixCls, size } = this;
            return {
                [`${prefixCls}-affix-wrapper`]: true,
                [`${prefixCls}-affix-wrapper-sm`]: size === 'small',
                [`${prefixCls}-affix-wrapper-lg`]: size === 'large',
            }
        }
    },
}
</script>
