<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" v-on="$$listeners">
    <vnode :vnodesReverse="tabPosition === 'bottom'">
        <TabBar key="tabBar" v-bind="{ ...$props, activeKey: selfActiveKey, activeIndex, panels, isVertical }" :style="tabBarStyle" @tabClick="onTabClick" @prevClick="onPrevClick" @nextClick="onNextClick" @createNewTab="createNewTab" @removeTab="removeTab" @keydown="onNavKeyDown">
            <slot slot="tabBarExtraContent" name="tabBarExtraContent"></slot>
        </TabBar>
        <TabContent key="tabContent" v-bind="{ ...$props, activeKey: selfActiveKey, activeIndex, isVertical, animated: tabPaneAnimated }" :class="contentClasses" :animated="tabPaneAnimated" animatedWithMargin>
            <slot></slot>
        </TabContent>
    </vnode>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import events from '../common/events';
import vnode from '../common/vnode';
import TabBar from './lib/TabBar';
import TabContent from './lib/TabContent';
import KeyCode from './lib/KeyCode';
import CONST from './const';
import isFlexSupported from '../_util/isFlexSupported';

export default {
    name: 'Tabs',
    mixins: [events],
    components: {
        vnode,
        TabBar,
        TabContent,
    },
    exceptListeners: ['change', 'scroll'],
    model: {
        prop: 'activeKey',
        event: 'change',
    },
    data(){
        return {
            selfActiveKey: this.activeKey || this.defaultActiveKey,
            panels: [],
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hideAdd: PropTypes.bool.def(false),
        tabBarStyle: PropTypes.object,
        // tabBarExtraContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]), // ***slot***
        destroyInactiveTabPane: PropTypes.bool.def(false),
        type: PropTypes.oneOf(['line', 'card', 'editable-card']),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).def(true),
        tabBarGutter: PropTypes.number,
        // renderTabBar: PropTypes.func,
    },
    computed: {
        tabPaneAnimated(){
            const { animated, type = CONST.LINE, $options } = this;
            let tabPaneAnimated = typeof animated === 'object' ? animated.tabPane : animated;
            if (type !== CONST.LINE) {
                tabPaneAnimated = hasProp(this, 'animated') ? tabPaneAnimated : false;
            }
            return tabPaneAnimated;
        },
        classes(){
            const { prefixCls, tabPosition, size, type = CONST.LINE, tabPaneAnimated } = this;

            return {
                [prefixCls]: true,
                [`${prefixCls}-${tabPosition}`]: true,
                [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
                [`${prefixCls}-${size}`]: !!size,
                [`${prefixCls}-card`]: type.indexOf('card') >= 0,
                [`${prefixCls}-${type}`]: true,
                [`${prefixCls}-no-animation`]: !tabPaneAnimated,
                'no-flex': !isFlexSupported(),
            }
        },
        isVertical(){
            const { tabPosition } = this;
            return tabPosition === 'left' || tabPosition === 'right';
        },
        contentClasses(){
            const { prefixCls, tabPosition, type = CONST.LINE } = this;
            return {
                [`${prefixCls}-${tabPosition}-content`]: true,
                [`${prefixCls}-card-content`]: type.indexOf('card') >= 0,
            };
        },
        activeIndex(){
            const { selfActiveKey } = this;
            let index = -1;
            this.panels.forEach((pane, i) => {
                if(pane.key === selfActiveKey){
                    index = i;
                    return false;
                }
            })
            return index;
        },
    },
    watch: {
        '$slots.default': {
            handler(val){
                this.handlePanels();
            },
            immediate: true,
        },
        activeKey(val){
            this.selfActiveKey = val;
        }
    },
    beforeUpdate () {
        this.handlePanels();
    },
    methods: {
        handlePanels(){
            let panels = [];
            const { animated, type = CONST.LINE } = this;
            const tabPanes = this.$slots.default || [];
            const defaultCloseable = type === CONST.EDITABLE_CARD;

            tabPanes.forEach(pane => {
                if(!pane.tag || !pane.data) return;
                const { componentOptions, data } = pane;
                const { key } = data; //pane.key
                const { propsData, children } = componentOptions;
                const { tab, closable = defaultCloseable, icon, disabled } = propsData;
                const tabNodes = children.filter(child => {
                    return child.data && child.data.slot === 'tab';
                })
                panels.push({
                    key,
                    tab,
                    icon,
                    closable: !defaultCloseable ? defaultCloseable : closable,
                    disabled,
                    getTabNode: tabNodes.length ? function(){
                        return tabNodes;
                    } : undefined,
                })
            })
            this.panels = panels;
            if(this.selfActiveKey === undefined){
                let enables = panels.filter(panel => {
                    return !(panel.disabled || panel.disabled === '')
                });
                if(enables.length > 0){
                    this.onTabClick(enables[0].key)
                }
            }
        },
        removeTab(targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            this.$emit('edit', targetKey, 'remove');
        },
        createNewTab(targetKey) {
            this.$emit('edit', targetKey, 'add');
        },
        onTabClick(val) {
            this.$emit('tabClick', val);
            if(!hasProp(this, 'activeKey')){
                this.selfActiveKey = val;
            }
            this.$emit('change', val);
        },
        onPrevClick(val) {
            this.$emit('prevClick', val);
        },
        onNextClick(val) {
            this.$emit('nextClick', val);
        },
        onNavKeyDown(e){
            const eventKeyCode = e.keyCode;
            if(eventKeyCode > KeyCode.DOWN || eventKeyCode < KeyCode.LEFT) return;
            let isNext = eventKeyCode === KeyCode.RIGHT || eventKeyCode === KeyCode.DOWN;
            e.preventDefault();
            const targetKey = this.getSiblingActiveKey(isNext);
            if(targetKey === undefined) return;
            this.onTabClick(targetKey);
        },
        getSiblingActiveKey(next){
            let { panels = [], selfActiveKey } = this;
            panels = panels.filter(panel => {
                return !(panel.disabled || panel.disabled === '');
            });

            let activeIndex;
            panels.forEach((panel, index) => {
                if(panel.key !== selfActiveKey) return;
                activeIndex = index;
                return false;
            })

            if(activeIndex === undefined) return;

            let target = activeIndex + (next ? 1 : -1);
            target = target < 0 ? panels.length - 1 : target >= panels.length ? 0 : target;
            target = panels[target];
            return target && target.key;
        }
    }
}
</script>
