<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" v-on="$$listeners">
    <TabBar>
        <slot slot="tabBarExtraContent" name="tabBarExtraContent"></slot>
    </TabBar>
    <!-- <span slot="extraContent" v-if="!hideAdd">
        <Icon type="plus" :class="`${prefixCls}-new-tab`" @click="createNewTab" />
        <slot name="tabBarExtraContent"></slot>
    </span>
    <div slot="extraContent" v-else-if="$slots.tabBarExtraContent" :class="`${prefixCls}-extra-content`">
        <slot name="tabBarExtraContent"></slot>
    </div> -->
    <TabContent :class="contentClasses" :animated="tabPaneAnimated" animatedWithMargin>
        <slot></slot>
    </TabContent>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import events from '../common/events';
import TabBar from './lib/TabBar';
import TabContent from './lib/TabContent';
import CONST from './const';
import isFlexSupported from '../_util/isFlexSupported';

export default {
    name: 'Tabs',
    mixins: [events],
    components: {
        TabBar,
        TabContent,
    },
    exceptListeners: ['change', 'scroll'],
    provide: function(){
        return {
            activeKey: this.selfActiveKey,
            activeIndex: this.activeIndex,
            isVertical: this.isVertical,
            panels: this.panels,
        }
    },
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
        tabBarExtraContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
        destroyInactiveTabPane: PropTypes.bool.def(false),
        type: PropTypes.oneOf(['line', 'card', 'editable-card']),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).def(true),
        tabBarGutter: PropTypes.number,
        renderTabBar: PropTypes.func,
    },
    computed: {
        classes(){
            const { prefixCls, tabPosition, size, type = CONST.LINE, animated } = this;

            let tabPaneAnimated = typeof animated === 'object' ? animated.tabPane : animated;
            // card tabs should not have animation
            if (type !== CONST.LINE) {
                tabPaneAnimated = !!animated ? tabPaneAnimated : false;
            }

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
        tabPaneAnimated(){
            const { animated, type = CONST.LINE, $options } = this;
            const { propsData } = $options;
            let tabPaneAnimated = typeof animated === 'object' ? animated.tabPane : animated;
            if (type !== CONST.LINE) {
                tabPaneAnimated = 'animated' in propsData ? tabPaneAnimated : false;
            }
            return tabPaneAnimated;
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
        }
    },
    watch: {
        '$slots.default': {
            handler(val){
                console.error('watch', val);
                let panels = [];
                const { animated, type = CONST.LINE } = this;
                const tabPanes = this.$slots.default || [];
                const defaultCloseable = type === CONST.EDITABLE_CARD;

                tabPanes.forEach(pane => {
                    if(!pane.tag || !pane.data) return;
                    const { componentOptions, data } = pane;
                    const { key } = data; //pane.key
                    const { propsData, children, disabled } = componentOptions;
                    const { tab, closable = defaultCloseable, icon } = propsData;
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
            },
            immediate: true,
        },
        panels(val, old){
            // change selfActive;
        }
    },
    mounted(){
        console.error('tabs', this);
    },
    methods: {
        removeTab(targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            this.$emit('edit', targetKey, 'remove');
        },
        handleChange(activeKey) {
            this.$emit('change', activeKey);
        },
        createNewTab(targetKey) {
            this.$emit('edit', targetKey, 'add');
        },
        onTabClick(val) {
            this.$emit('tabClick', val);
        },
        onPrevClick(val) {
            this.$emit('prevClick', val);
        },
        onNextClick(val) {
            this.$emit('nextClick', val);
        },
    }
}
</script>
