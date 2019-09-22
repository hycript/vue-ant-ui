<style lang="less" src="./style/index.less"></style>
<template>
<vTransition v-if="!closed" :transitionName="`${prefixCls}-slide-up`" :appear="false" @after-leave="animationEnd">
    <div v-show="closing" v-on="$$listeners" :class="classes" :data-show="closing">
        <span v-if="$slots.icon || iconName" :class="`${prefixCls}-icon`">
            <slot name="icon">
                <Icon :type="iconName"></Icon>
            </slot>
        </span>
        <span :class="`${prefixCls}-message`">
            <slot name="message">{{ message }}</slot>
        </span>
        <span :class="`${prefixCls}-description`">
            <slot v-if="$slots.description" name="description"></slot>
            <slot v-else>{{ description }}</slot>
        </span>
        <a v-if="closable || closeText" :class="`${prefixCls}-close-icon`" @click="handleClose">
            <slot name="closeText">
                <template v-if="closeText">{{ closeText}}</template>
                <Icon v-else type="close" />
            </slot>
        </a>
    </div>
</vTransition>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { getProp } from '../_util/props-util';
import events from '../common/events';
import Icon from '../icon';
import vTransition from '../transition';

const IconType = {
    'success': 'check-circle',
    'info': 'info-circle',
    'error': 'close-circle',
    'warning': 'exclamation-circle',
    'default': 'default',
}

export default {
    name: 'Alert',
    mixins: [events],
    exceptListeners: ['close', 'afterClose'],
    components: {
        Icon,
    },
    data(){
        return {
            closing: true,
            closed: false,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-alert'),
        type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
        closable: PropTypes.bool,
        closeText: PropTypes.any,
        message: PropTypes.any,
        description: PropTypes.any,
        showIcon: PropTypes.bool,
        iconType: PropTypes.string,
        banner: PropTypes.bool,
        icon: PropTypes.any,
    },
    computed: {
        hasIcon(){
            const { $slots, banner, description } = this;
            let showIcon = getProp(this, 'showIcon');
            return banner && showIcon === undefined ? true : showIcon;
        },
        classes(){
            const { $slots, prefixCls, type, closing, description, hasIcon, banner, closable } = this;
            const { default: $default, description: $description } = $slots;
            const alertType = banner && type === undefined ? 'warning' : type || 'info';
            return {
                [prefixCls]: true,
                [`${prefixCls}-${alertType}`]: true,
                [`${prefixCls}-close`]: !closing,
                [`${prefixCls}-with-description`]: !!$description || $default || !!description,
                [`${prefixCls}-no-icon`]: !hasIcon,
                [`${prefixCls}-banner`]: !!banner,
                [`${prefixCls}-closable`]: closable,
            }
        },
        iconName(){
            const { $slots, banner, description, hasIcon } = this;
            let { type, iconType } = this;

            if($slots.icon || !hasIcon) return;
            if(iconType) return iconType;

            type = banner && type === undefined ? 'warning' : type || 'info';
            return IconType[type] || IconType['default'];
        }
    },
    methods: {
        handleClose(e){
            e.preventDefault();
            const dom = this.$el;
            dom.style.height = `${dom.offsetHeight}px`;
            // Magic code
            // 重复一次后才能正确设置 height
            dom.style.height = `${dom.offsetHeight}px`;
            this.closing = false;
            this.$emit('close', e);
        },
        animationEnd(e){
            this.$emit('afterClose', e);
            this.closed = true;
            this.closing = true;
        }
    }
}
</script>
