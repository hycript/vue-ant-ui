<style></style>
<template>
<div :class="classes" :style="defaultStyles"
    v-on="$$listeners"
    @mouseenter="clearCloseTimer" @mouseleave="startCloseTimer"
>
    <div :class="`${componentClass}-content`">
        <slot></slot>
    </div>
    <a v-if="closable" tabIndex="0" @click="close" :class="`${componentClass}-close`">
        <slot name="closeIcon">
            <span :class="`${componentClass}-close-x`" />
        </slot>
    </a>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';

export default {
    name: 'Notice',
    mixins: [events],
    exceptListeners: ['mouseenter', 'mouseleave'],
    props: {
        prefixCls: PropTypes.string.def('ant-notification'),
        duration: PropTypes.number.def(1.5),
        closable: PropTypes.bool,
        update: PropTypes.bool,
        // closeIcon: PropTypes.any,
    },
    computed: {
        componentClass(){
            const { prefixCls } = this;
            return `${prefixCls}-notice`;
        },
        classes(){
            const { componentClass, closable } = this;
            return {
                [`${componentClass}`]: true,
                [`${componentClass}-closable`]: closable,
            }
        },
        defaultStyles(){
            const { $vnode } = this;
            return !($vnode.data.staticStyle || $vnode.data.style) && 'right: 50%';
        },
        selfKey(){
            return this.$vnode.key;
        },
    },
    watch: {
        duration() {
            this.restartCloseTimer();
        },
    },
    mounted() {
        this.startCloseTimer();
    },
    updated() {
        if (this.update) {
            this.restartCloseTimer();
        }
    },
    beforeDestroy() {
        this.clearCloseTimer();
        this.willDestroy = true; // beforeDestroy调用后依然会触发onMouseleave事件
    },
    methods: {
        close() {
            this.clearCloseTimer();
            this.$emit('close');
        },
        startCloseTimer() {
            this.clearCloseTimer();
            if (!this.willDestroy && this.duration) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1000);
            }
        },
        clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        },
        restartCloseTimer() {
            this.clearCloseTimer();
            this.startCloseTimer();
        },
    }
}
</script>
