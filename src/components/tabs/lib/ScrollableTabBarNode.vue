<style lang="less"></style>
<template>
<div :class="classes">
    <span v-if="isScroll" unselectable="unselectable" :class="prevClasses" @click="prevClick">
        <span :class="`${prefixCls}-tab-prev-icon`">
            <Icon :type="isVertical ? 'up' : 'left'" :class="`${prefixCls}-tab-prev-icon-target`" />
        </span>
    </span>
    <span v-if="isScroll" unselectable="unselectable" :class="nextClasses" @click="nextClick">
        <span :class="`${prefixCls}-tab-next-icon`">
            <Icon :type="isVertical ? 'down' : 'right'" :class="`${prefixCls}-tab-next-icon-target`" />
        </span>
    </span>
    <div :class="`${prefixCls}-nav-wrap`">
        <div :class="`${prefixCls}-nav-scroll`">
            <div :class="navClasses">
                <TabBarTabsNode v-bind="{ ...$props }"></TabBarTabsNode>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import TabBarTabsNode from './TabBarTabsNode';

export default {
    name: 'ScrollableTabBarNode',
    components: {
        TabBarTabsNode,
    },
    data(){
        return {
            isScroll: false,
            next: false,
            prev: false,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hideAdd: PropTypes.bool.def(false),
        type: PropTypes.oneOf(['line', 'card', 'editable-card']),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        inkBarAnimated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        tabBarGutter: PropTypes.number,
        isVertical: PropTypes.bool,
        panels: PropTypes.array,
        scrollAnimated: PropTypes.bool.def(true),
    },
    computed: {
        showNextPrev(){
            return this.next || this.prev;
        },
        classes(){
            const { prefixCls, isScroll } = this;
            return {
                [`${prefixCls}-nav-container`]: 1,
                [`${prefixCls}-nav-container-scrolling`]: isScroll,
            }
        },
        prevClasses(){
            const { prefixCls, prev, isScroll } = this;
            return {
                [`${prefixCls}-tab-prev`]: 1,
                [`${prefixCls}-tab-btn-disabled`]: !prev,
                [`${prefixCls}-tab-arrow-show`]: isScroll,
            }
        },
        nextClasses(){
            const { prefixCls, prev, isScroll } = this;
            return {
                [`${prefixCls}-tab-next`]: 1,
                [`${prefixCls}-tab-btn-disabled`]: !prev,
                [`${prefixCls}-tab-arrow-show`]: isScroll,
            }
        },
        navClasses(){
            const { prefixCls, scrollAnimated } = this;
            const navClassName = `${prefixCls}-nav`;
            return {
                [navClassName]: true,
                [scrollAnimated ? `${navClassName}-animated` : `${navClassName}-no-animated`]: true,
            };
        }
    },
    watch: {
        tabPosition(){

        }
    },
    mounted(){

    },
    updated(){

    },
    beforeDestroy(){

    },
    methods: {
        prevClick(){

        },
        nextClick(){

        }
    }
}
</script>
