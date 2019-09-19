<style lang="less" src="./style/index.less"></style>
<template>
    <component :is="$attrs.href ? 'a' : 'button'" :class="classes" v-on="$$listeners" @click="click" :disabled="disabled">
        <Icon v-if="iconType" :type="iconType"></Icon><template v-if="$slots.default && $slots.default.length > 0">
            <span v-if="$slots.default.length === 1 && $slots.default[0].tag === undefined"><slot></slot></span><template v-else><slot></slot></template>
        </template>
    </component>
</template>
<script>
import PropTypes from '../_util/vue-types';
import click from '../common/click';
import events from '../common/events';
import buttonType from './buttonType.js';
import buttonSize from './buttonSize.js';
import buttonSizeMapper from './buttonSizeMapper.js';
import Icon from '../icon';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export default {
    name: 'Button',
    mixins: [click, events],
    exceptListeners: ['click'],
    components: {
        Icon,
    },
    data(){
        return {
            hasTwoCNChar: false,
            selfLoading: this.loading,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-btn'),
        type: PropTypes.oneOf(buttonType).def('default'),
        shape: PropTypes.oneOf(['circle', 'circle-outline']),
        size: buttonSize,
        htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
        loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        icon: PropTypes.string,
        ghost: PropTypes.bool,
        disabled: PropTypes.bool.def(false),
    },
    computed: {
        classes(){
            const { prefixCls, type, shape, size, icon, selfLoading, clicked, ghost, hasTwoCNChar, $slots } = this;
            const sizeCls = buttonSizeMapper(size);
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${shape}`]: shape,
                [`${prefixCls}-${sizeCls}`]: sizeCls,
                [`${prefixCls}-icon-only`]: (!$slots.default || $slots.default.length === 0 ) && icon,
                [`${prefixCls}-loading`]: selfLoading,
                [`${prefixCls}-clicked`]: clicked,
                [`${prefixCls}-background-ghost`]: ghost,
                [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
            }
        },
        iconType(){
            const { selfLoading, icon } = this;
            return selfLoading ? 'loading' : icon;
        }
    },
    watch: {
        loading (loading) {
            clearTimeout(this.delayTimeout)
            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = setTimeout(() => { this.selfLoading = !!loading }, loading.delay);
            } else {
                this.selfLoading = !!loading;
            }
        },
    },
    created(){
        this.fixTwoCNChar();
    },
    beforeUpdate(){
        this.fixTwoCNChar();
    },
    methods: {
        fixTwoCNChar(){
            const { loading, icon, $slots, iconType } = this
            if( !$slots.default || $slots.default.length !== 1 || (iconType && iconType !== 'loading')){
                this.hasTwoCNChar = false;
                return;
            }
            const $slot = $slots.default[0];
            const { tag, text } = $slot;
            if(tag === undefined && isTwoCNChar(text)){
                this.hasTwoCNChar = true;
                return;
            }
            this.hasTwoCNChar = false;
        },
        click($event){
            this.updateClickState();
            this.$emit('click', $event);
        },
    }
}
</script>
