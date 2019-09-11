<style lang="less" src="./style/index.less"></style>
<template>
<span v-on="$$listeners" :class="classes" :style="hasChildren && styleWithOffset">
    <template  v-if="!hasChildren && status">
        <span :class="statusClasses" />
    </template>
    <template v-else>
        <slot></slot>
        <vTransition :appear="false" :transitionName="`${prefixCls}-zoom`">
            <vnode v-if="$slots.count" :class="[`${scrollNumberPrefixCls}-custom-component`]" style="top: 0;" :style="styleWithOffset" :title="countTitle">
                <slot name="count"></slot>
            </vnode>
            <span v-else-if="!isHidden" :class="countClasses" :title="countTitle" :style="styleWithOffset">
                {{ displayCount }}
            </span>
        </vTransition>
    </template>
    <span v-if="(!isHidden || status) && text" :class="[`${prefixCls}-status-text`]">{{ text }}</span>
</span>
</template>
<script>
import PropTypes from '~utils/vue-types';
import { filterEmpty, isNumeric } from '~utils/props-util';
import events from '../common/events';
import vnode from '../common/vnode';
import vTransition from '../transition/transition';

export default {
    name: 'Badge',
    mixins: [events],
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-badge'),
        /** Number to show in badge */
        count: PropTypes.oneOfType([PropTypes.number, PropTypes.string, null]).def(null),
        showZero: PropTypes.bool.def(false),
        /** Max count to show */
        overflowCount: PropTypes.number.def(99),
        /** whether to show red dot without number */
        dot: PropTypes.bool.def(false),
        scrollNumberPrefixCls: PropTypes.string.def('ant-scroll-number'),
        status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
        text: PropTypes.string,
        offset: PropTypes.array,
        numberStyle: PropTypes.object.def({}),
        title: PropTypes.string,
    },
    computed: {
        hasChildren(){
            const { $slots } = this;
            const children = filterEmpty($slots.default);
            return !!children && !!children.length;
        },
        classes(){
            const { prefixCls, status, hasChildren } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-status`]: !!status,
                [`${prefixCls}-not-a-wrapper`]: !hasChildren,
            }
        },
        isZero(){
            const count = this.getNumberedDispayCount();
            return count === 0 || count === '0';
        },
        isDot(){
            const { dot, status, isZero } = this;
            return (dot && !isZero) || status;
        },
        displayCount(){
            const { isDot } = this;
            return isDot ? '' : this.getNumberedDispayCount();
        },
        isHidden(){
            const { showZero, displayCount, isZero, isDot } = this;
            const isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
            return (isEmpty || (isZero && !showZero)) && !isDot;
        },
        styleWithOffset(){
            const { offset, numberStyle } = this;
            return Object.assign(offset ? {
                right: `${-parseInt(offset[0], 10)}px`,
                marginTop: isNumeric(offset[1]) ? `${offset[1]}px` : offset[1],
            } : {}, numberStyle);
        },
        countClasses(){
            const { prefixCls, isDot, count, status, scrollNumberPrefixCls } = this;
            return {
                [scrollNumberPrefixCls]: true,
                [`${prefixCls}-dot`]: isDot,
                [`${prefixCls}-count`]: !isDot,
                [`${prefixCls}-multiple-words`]: !isDot && count && count.toString && count.toString().length > 1,
                [`${prefixCls}-status-${status}`]: !!status,
            };
        },
        statusClasses(){
            const { prefixCls, status } = this;
            return {
                [`${prefixCls}-status-dot`]: !!status,
                [`${prefixCls}-status-${status}`]: !!status,
            }
        },
        countTitle(){
            const { title, count } = this;
            return title || count;
        }
    },
    methods: {
        getNumberedDispayCount() {
            const { overflowCount, count } = this;
            return isNumeric(count) && count > overflowCount ? `${overflowCount}+` : count;
        },
    }
}
</script>
