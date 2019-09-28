<template>
<span v-if="hasAddon" :class="classes">
    <span :class="wrapperClasses">
        <span v-if="hasAddonBefore" :class="`${prefixCls}-group-addon`">
            <slot name="addonBefore">{{ addonBefore }}</slot>
        </span>
        <slot></slot>
        <span v-if="addonAfter" :class="`${prefixCls}-group-addon`">
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
        hasAddonBefore(){
            const { $slots, addonBefore } = this;
            return !!$slots.addonBefore || !!addonBefore;
        },
        hasAddonAfter(){
            const { $slots, addonAfter } = this;
            return !!$slots.addonAfter || !!addonAfter;
        },
        hasAddon(){
            const { hasAddonBefore, hasAddonAfter } = this;
            return hasAddonBefore || hasAddonAfter;
        },
        classes(){
            const { hasAddon, prefixCls, size } = this;
            if(hasAddon) return;
            return {
                [`${prefixCls}-group-wrapper`]: true,
                [`${prefixCls}-group-wrapper-sm`]: size === 'small',
                [`${prefixCls}-group-wrapper-lg`]: size === 'large',
            }
        },
        wrapperClasses(){
            const { hasAddon, prefixCls, size } = this;
            if(hasAddon) return;
            return [`${prefixCls}-wrapper`, `${prefixCls}-group`];
        }
    }
}
</script>
