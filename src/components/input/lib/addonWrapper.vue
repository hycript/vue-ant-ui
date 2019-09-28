<template>
<span v-if="$slots.addonBefore || addonBefore || $slots.addonAfter || addonAfter" :class="classes">
    <span :class="wrapperClasses">
        <span v-if="$slots.addonBefore || addonBefore" :class="`${prefixCls}-group-addon`">
            <slot name="addonBefore">{{ addonBefore }}</slot>
        </span>
        <slot></slot>
        <span v-if="$slots.addonAfter || addonAfter" :class="`${prefixCls}-group-addon`">
            <slot name="addonAfter">{{ addonAfter }}</slot>
        </span>
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
                [`${prefixCls}-group-wrapper`]: true,
                [`${prefixCls}-group-wrapper-sm`]: size === 'small',
                [`${prefixCls}-group-wrapper-lg`]: size === 'large',
            }
        },
        wrapperClasses(){
            const { prefixCls, size } = this;
            return [`${prefixCls}-wrapper`, `${prefixCls}-group`];
        }
    }
}
</script>
