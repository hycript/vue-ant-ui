<style lang="less"></style>
<template>
<div>
    <div v-for="(panel, index) in panels" :key="panel.key"
        :class="getClasses(panel)"
        role="tab" :aria-disabled="panel.disabled || panel.disabled === '' ? 'true' : 'false'"
        :aria-selected="activeKey === panel.key ? 'true' : 'false'"
        :style="getTabStyles(panel, index)"
        @click="click(panel)"
    >
        <div :class="isClosable(panel) ? undefined : `${prefixCls}-tab-unclosable`">
            <vnode v-if="panel.getTabNode" :vnodes="panel.getTabNode()" style="display: inline-block;"></vnode>
            <template v-else><Icon v-if="panel.icon" :type="panel.icon"/>{{ panel.tab }}</template>
            <Icon v-if="isClosable(panel)" type="close" :class="`${prefixCls}-close-x`" @click="removeTab(panel.key, $event)"/>
        </div>
    </div>
</div>
</template>
<script>
import PropTypes from '../../_util/vue-types';
import vnode from '../../common/vnode';
import emitter from '../../common/emitter';
import Icon from '../../icon';

export default {
    name: 'TabBarTabsNode',
    mixins: [emitter],
    components: {
        vnode,
        Icon,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        activeIndex: PropTypes.number,
        tabBarGutter: PropTypes.any.def(null),
        tabPosition: PropTypes.string,
        panels: PropTypes.any.def([]), //props of pane; { key, tab }
        isVertical: PropTypes.bool,
    },
    created(){
        // warning(tab !== undefined, 'There must be `tab` property or slot on children of Tabs.');
    },
    methods: {
        getClasses(panel){
            const { prefixCls, activeKey } = this;
            return {
                [`${prefixCls}-tab`]: true,
                [`${prefixCls}-tab-active`]: activeKey === panel.key,
                [`${prefixCls}-tab-disabled`]: panel.disabled || panel.disabled === '',
            }
        },
        getTabStyles(panel, index){
            const { panels, isVertical, tabBarGutter } = this;
            let gutter = tabBarGutter && index === panels.length - 1 ? 0 : tabBarGutter;
            gutter = typeof gutter === 'number' ? `${gutter}px` : gutter;
            return {
                [isVertical ? 'marginBottom' : 'marginRight']: gutter,
            };
        },
        isClosable(panel){
            const { closable } = panel;
            return closable === undefined || !!closable || closable === '';
        },
        click(panel){
            const { disabled, key } = panel;
            if(disabled || disabled === '') return;
            // this.$emit('tabClick', panel.key);
            this.$dispatch('TabBar', 'tabClick', key);
        },
        removeTab(key, e){
            this.$dispatch('TabBar', 'removeTab', key, e);
        }
    }
}
</script>
