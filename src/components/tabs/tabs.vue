<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" v-on="$$listeners">
    <TabBar>
        <span slot="extraContent" v-if="!hideAdd">
            <Icon type="plus" :class="`${prefixCls}-new-tab`" @click="createNewTab" />
            <slot name="tabBarExtraContent"></slot>
        </span>
        <div slot="extraContent" v-else-if="$slots.tabBarExtraContent" :class="`${prefixCls}-extra-content`">
            <slot name="tabBarExtraContent"></slot>
        </div>
    </TabBar>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import events from '../common/events';
import TabBar from './tabBar';

export default {
    name: 'Tabs',
    mixins: [events],
    components: {
        TabBar,
    },
    exceptListeners: ['change', 'scroll'],
    model: {
        prop: 'activeKey',
        event: 'change',
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
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        tabBarGutter: PropTypes.number,
        renderTabBar: PropTypes.func,
    },
    computed: {
        classes(){
            const { prefixCls, tabPosition, size, type, animated } = this;

            let tabPaneAnimated = typeof animated === 'object' ? animated.tabPane : animated;
            // card tabs should not have animation
            if (type !== 'line') {
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
            }
        }
    },
    mounted(){

    },
    methods: {
        createNewTab(){

        },
        onTabClick(){

        },
        onNavKeyDown(){

        },
        onScroll(){

        },
        setSentinelStart(){

        },
        setSentinelEnd(){

        },
        setPanelSentinelStart(){

        },
        setPanelSentinelEnd(){

        },
        setActiveKey(){

        },
        getNextActiveKey(){

        },
        updateSentinelContext(){

        },
    }
}
</script>
