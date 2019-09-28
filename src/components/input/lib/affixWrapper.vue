<template>
<span v-if="$slots.prefix || prefix || $slots.suffix || suffix" :class="classes">
    <span v-if="$slots.prefix || prefix" :class="`${prefixCls}-prefix`">
        <slot name="prefix">{{ prefix }}</slot>
    </span>
    <slot></slot>
    <span v-if="$slots.suffix || suffix" :class="`${prefixCls}-suffix`">
        <slot name="suffix">{{ suffix }}</slot>
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
