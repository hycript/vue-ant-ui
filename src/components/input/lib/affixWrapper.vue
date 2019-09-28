<template>
<span v-if="hasAffix" :class="classes">
    <span v-if="hasPrefix" :class="`${prefixCls}-prefix`">
        <slot name="prefix">{{ prefix }}</slot>
    </span>
    <slot></slot>
    <span v-if="hasSuffix" :class="`${prefixCls}-suffix`">
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
        hasPrefix(){
            const { $slots, prefix } = this;
            return !!$slots.prefix || !!prefix;
        },
        hasSuffix(){
            const { $slots, suffix } = this;
            return !!$slots.suffix || !!suffix;
        },
        hasAffix(){
            const { hasPrefix, hasSuffix } = this;
            return hasPrefix || hasSuffix;
        },
        classes(){
            const { hasAffix, prefixCls, size } = this;
            if(hasAffix) return;
            return {
                [`${prefixCls}-affix-wrapper`]: true,
                [`${prefixCls}-affix-wrapper-sm`]: size === 'small',
                [`${prefixCls}-affix-wrapper-lg`]: size === 'large',
            }
        }
    }
}
</script>
