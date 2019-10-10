<style lang="less" src="./style/index.less"></style>
<template>
<div v-if="hasChildren" :class="wrapperClasses">
    <div v-if="selfSpinning" key="loading">
        <Inner :prefixCls="prefixCls" :spinning="selfSpinning" :tip="tip" :size="size">
            <vnode v-if="slotIndicator" :vnodes="slotIndicator"></vnode>
        </Inner>
    </div>
    <div v-if="hasChildren" :class="containerClasses" key="container">
        <slot></slot>
    </div>
</div>
<Inner v-else :prefixCls="prefixCls" :spinning="selfSpinning" :tip="tip" :size="size">
    <vnode v-if="slotIndicator" :vnodes="slotIndicator"></vnode>
</Inner>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/tool';
import vnode from '../common/vnode';
import Inner from './inner';

// Render indicator
let defaultIndicator;

export function setDefaultIndicator(content) {
    defaultIndicator =
        typeof content.indicator === 'function' ? content.indicator : h => {
            return <content.indicator />;
        };
}

/* setDefaultIndicator({
    indicator: (h) => {
        return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
    },
}) */

/* setDefaultIndicator({
    indicator: {
        render () {
            return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
        },
    },
}) */

export default {
    name: 'Spin',
    components: {
        vnode,
        Inner,
    },
    data(){
        return {
            selfSpinning: false,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-spin'),
        spinning: PropTypes.bool.def(true),
        size: PropTypes.oneOf(['small', 'default', 'large']).def('default'),
        wrapperClassName: PropTypes.string,
        tip: PropTypes.string,
        delay: PropTypes.number,
        indicator: PropTypes.any, //slot
    },
    computed: {
        hasChildren(){
            let children = filterEmpty(this.$slots.default);
            return !!children.length;
        },
        wrapperClasses(){
            const { hasChildren, wrapperClassName, prefixCls } = this;
            if(!hasChildren) return;
            return [`${prefixCls}-nested-loading`, wrapperClassName];
        },
        classes(){
            const { prefixCls, size, selfSpinning, tip } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-spinning`]: selfSpinning,
                [`${prefixCls}-show-text`]: !!tip,
            }
        },
        containerClasses(){
            const { prefixCls, selfSpinning } = this;
            return {
                [`${prefixCls}-container`]: true,
                [`${prefixCls}-blur`]: selfSpinning,
            }
        },
        slotIndicator(){
            const { indicator, $slots } = this;
            return indicator || $slots.indicator || defaultIndicator
        }
    },
    watch: {
        spinning: {
            handler(val){
                const { selfSpinning, delay } = this;
                if(this.delayTimer){
                    clearTimeout(this.delayTimer);
                    this.delayTimer = undefined;
                }
                if(val === selfSpinning) return;
                if(!val || !(delay && !isNaN(delay))){
                    this.selfSpinning = val;
                    return;
                }
                this.delayTimer = setTimeout(_ => {
                    this.selfSpinning = val;
                }, delay);
            },
            immediate: true,
        }
    },
    beforeDestroy(){
        this.delayTimer && clearTimeout(this.delayTimer);
        this.delayTimer = undefined;
    }
}
</script>
