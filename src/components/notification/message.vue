<style lang="less" src="./style/index.less"></style>
<template>
<div :class="hasIcon ? `${selfPrefixCls}-with-icon` : ''">
    <span v-if="icon" :class="`${selfPrefixCls}-icon`">
        <vnode :vnodes="icon"></vnode>
    </span>
    <Icon v-else-if="iconType" :class="`${selfPrefixCls}-icon ${selfPrefixCls}-icon-${type}`" :type="iconType" />
    <div :class="`${selfPrefixCls}-message`">
        <span v-if="!description && hasIcon" :class="`${selfPrefixCls}-message-single-line-auto-margin`" />
        <vnode :vnodes="message">
            <slot name="message"></slot>
        </vnode>
    </div>
    <div :class="`${selfPrefixCls}-description`">
        <vnode :vnodes="description">
            <slot name="description"></slot>
        </vnode>
    </div>
    <span v-if="btn || $slots.btn" :class="`${selfPrefixCls}-btn`">
        <vnode :vnodes="btn">
            <slot name="btn"></slot>
        </vnode>
    </span>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Icon from '../icon';
import vnode from '../common/vnode';

const IconType = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'close-circle-o',
    warning: 'exclamation-circle-o',
}

export default {
    name: 'Message',
    components: {
        Icon,
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-notification'),
        type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
        content: PropTypes.any,
        icon: PropTypes.any,
        description: PropTypes.any,
        message: PropTypes.any,
        btn: PropTypes.any,
    },
    computed: {
        selfPrefixCls(){
            return `${this.prefixCls}-notice`;
        },
        iconType(){
            const { type } = this;
            return IconType[type];
        },
        hasIcon(){
            const { icon, iconType } = this;
            return icon || iconType;
        },
    },
}
</script>
