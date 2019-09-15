<style lang="less"></style>
<template>
<div ref="container" :class="classes"  :key="`nav-${tabPosition}`">
    <span v-if="showNextPrev" unselectable="unselectable" :class="prevClasses" @click="prevClick">
        <span :class="`${prefixCls}-tab-prev-icon`">
            <Icon :type="isVertical ? 'up' : 'left'" :class="`${prefixCls}-tab-prev-icon-target`" />
        </span>
    </span>
    <span v-if="showNextPrev" unselectable="unselectable" :class="nextClasses" @click="nextClick">
        <span :class="`${prefixCls}-tab-next-icon`">
            <Icon :type="isVertical ? 'down' : 'right'" :class="`${prefixCls}-tab-next-icon-target`" />
        </span>
    </span>
    <div ref="navWrap" :class="`${prefixCls}-nav-wrap`">
        <div :class="`${prefixCls}-nav-scroll`">
            <div ref="nav" :class="navClasses" :style="navStyles">
                <TabBarTabsNode ref="navTabsContainer" v-bind="{ ...$props }"></TabBarTabsNode>
                <InkTabBarNode v-bind="{ ...$props }"></InkTabBarNode>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { debounce } from '../../_util/lodash';
import PropTypes from '../../_util/vue-types';
import listener from '../../common/listener';
import emitter from '../../common/emitter';
import TabBarTabsNode from './TabBarTabsNode';
import InkTabBarNode from './InkTabBarNode';
import isTransformSupported from '../../_util/isTransformSupported';
import Icon from '../../icon/icon';

const TransformSupported = isTransformSupported();

export default {
    name: 'ScrollableTabBarNode',
    mixins: [listener, emitter],
    components: {
        TabBarTabsNode,
        InkTabBarNode,
        Icon,
    },
    data(){
        return {
            next: false,
            prev: false,
            offset: 0,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        activeIndex: PropTypes.number,
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
            const { prefixCls, showNextPrev } = this;
            return {
                [`${prefixCls}-nav-container`]: 1,
                [`${prefixCls}-nav-container-scrolling`]: showNextPrev,
            }
        },
        prevClasses(){
            const { prefixCls, prev, showNextPrev } = this;
            return {
                [`${prefixCls}-tab-prev`]: 1,
                [`${prefixCls}-tab-btn-disabled`]: !prev,
                [`${prefixCls}-tab-arrow-show`]: showNextPrev,
            }
        },
        nextClasses(){
            const { prefixCls, next, showNextPrev } = this;
            return {
                [`${prefixCls}-tab-next`]: 1,
                [`${prefixCls}-tab-btn-disabled`]: !next,
                [`${prefixCls}-tab-arrow-show`]: showNextPrev,
            }
        },
        navClasses(){
            const { prefixCls, scrollAnimated } = this;
            const navClassName = `${prefixCls}-nav`;
            return {
                [navClassName]: true,
                [scrollAnimated ? `${navClassName}-animated` : `${navClassName}-no-animated`]: true,
            };
        },
        navStyles(){
            const { offset, isVertical } = this;
            const target = Math.min(0, offset);
            if(isVertical){
                return {
                    [TransformSupported ? 'transform' : 'top']: TransformSupported ? `translate3d(0, ${target}px, 0)` : `${target}px`,
                }
            }else{
                return {
                    [TransformSupported ? 'transform' : 'left']: TransformSupported ? `translate3d(${target}px, 0, 0)` : `${target}px`,
                }
            }
        }
    },
    watch: {
        tabPosition(){
            this.offset = 0;
            this.debouncedResize();
        },
        activeKey(){
            this.debouncedResize();
        },
    },
    mounted(){
        this.$nextTick(_ => {
            this.setNextPrev();
            this.debouncedResize = debounce(() => {
                this.setNextPrev();
                this.scrollToActiveTab();
            }, 200);
            this.resizeEvent = this.registListener(window, 'resize', this.debouncedResize);
        })
    },
    updated(){
        this.$nextTick(() => {
            this.setNextPrev();
        })
    },
    beforeDestroy(){
        this.debouncedResize = undefined;
    },
    methods: {
        setNextPrev(offset){
            if(this.$isServer) return;
            offset = offset === undefined ? this.offset : offset;
            const { isVertical } = this;
            const navNode = this.$refs['nav'];
            const $navTabsContainer = this.$refs['navTabsContainer'];
            const navTabsContainer = $navTabsContainer && $navTabsContainer.$el;

            const navNodeWH = this.getScroll(navTabsContainer || navNode);
            const containerWH = this.getOffset(this.$el);
            const navWrapNodeWH = this.getOffset(this.$refs['navWrap']);

            const minOffset = containerWH - navNodeWH;

            let next = false;
            let prev = false;

            if (minOffset >= 0) {
                next = false;
                offset = 0;
            } else if (minOffset < offset) {
                next = true;
            } else {
                next = false;
                const realOffset = navWrapNodeWH - navNodeWH;
                offset = realOffset;
            }

            prev = offset < 0 ? true : false;

            this.prev = prev;
            this.next = next;
            this.offset = Math.round(offset);

            // console.error(navTabsContainer, navNodeWH, containerWH, navWrapNodeWH);
            return {
                next,
                prev,
            }
        },
        getOffset(node){
            return node[this.isVertical ? 'offsetHeight' : 'offsetWidth'];
        },
        getScroll(node){
            return node[this.isVertical ? 'scrollHeight' : 'scrollWidth'];
        },
        getPosition(node){
            return node.getBoundingClientRect()[this.isVertical ? 'top' : 'left'];
        },
        scrollToActiveTab(e){
            const { prefixCls, isVertical } = this;
            const navWrap = this.$refs['navWrap'];
            const activeTab = this.$el.querySelector(`.${prefixCls}-tab-active`);

            if ((e && e.target !== e.currentTarget) || !activeTab) return;

            const needToScroll = this.showNextPrev;

            if (!needToScroll) return;

            const activeTabWH = this.getScroll(activeTab);
            const navWrapNodeWH = this.getOffset(navWrap);
            const wrapOffset = this.getPosition(navWrap);
            const activeTabOffset = this.getPosition(activeTab);
            let { offset } = this;

            if (wrapOffset > activeTabOffset) {
                offset += wrapOffset - activeTabOffset;
            } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
                offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
            }

            this.offset = Math.round(offset);
        },
        prevClick(e){
            this.$dispatch('TabBar', 'prevClick', e);
            const navWrap = this.$refs['navWrap'];
            const navWrapNodeWH = this.getOffset(navWrap);
            let offset = this.offset + navWrapNodeWH;
            if(offset > 0){
                offset = 0;
            }
            this.setNextPrev(offset);
        },
        nextClick(e){
            this.$dispatch('TabBar', 'nextClick', e);
            const navWrap = this.$refs['navWrap'];
            const navWrapNodeWH = this.getOffset(navWrap);
            const navNodeWH = this.getScroll(this.$refs['navTabsContainer'].$el || navWrap);
            let offset = this.offset - navWrapNodeWH;
            if(offset + navNodeWH - navWrapNodeWH < 0){
                offset = navWrapNodeWH - navNodeWH;
            }
            this.setNextPrev(offset);
        }
    }
}
</script>
