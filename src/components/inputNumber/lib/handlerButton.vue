<template>
<span
    :class="classes"
    role="button" unselectable="unselectable"
    :aria-label="`${type === 'up' ? 'Increase' : 'Decrease'} Value`" :aria-disabled="disabled"
    v-on="listeners" @click="click"
>
    <slot></slot>
</span>
</template>
<script>
import PropTypes from '../../_util/vue-types';

export default {
    props: {
        prefixCls: PropTypes.string,
        type: PropTypes.oneOf(['up', 'down']),
        disabled: PropTypes.bool,
    },
    computed: {
        classes(){
            const { prefixCls, type, disabled } = this;
            return {
                [`${prefixCls}-handler`]: true,
                [`${prefixCls}-handler-${type}`]: true,
                [`${prefixCls}-handler-up-disabled`]: disabled,
            }
        },
        listeners(){
            const { $isServer } = this;
            if($isServer) return {};
            const isTouch = 'touchstart' in window;
            if(isTouch){
                return {
                    'touchstart': this.start,
                    'touchend': this.end,
                }
            }
            return {
                'mousedown': this.start,
                'mouseup': this.end,
                'mouseleave': this.end,
            }
        }
    },
    methods: {
        start(e){
            if(this.disabled) return;
            this.$emit('start', e);
        },
        end(e){
            this.$emit('end', e);
        },
        click(e){
            this.$emit('click', e);
        }
    }
}
</script>
