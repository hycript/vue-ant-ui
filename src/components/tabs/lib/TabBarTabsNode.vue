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
        <div :class="panel.closable ? undefined : `${prefixCls}-tab-unclosable`">
            <vnode v-if="panel.getTabNode" :vnodes="panel.getTabNode()"></vnode>
            <template v-else><Icon v-if="panel.icon" :type="panel.icon"/>{{ panel.tab }}</template>
            <Icon v-if="panel.closable" type="close" :class="`${prefixCls}-close-x`" @click="void 0"/>
        </div>
    </div>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import vnode from '../../common/vnode';
import emitter from '../../common/emitter';

export default {
    name: 'TabBarTabsNode',
    mixins: [emitter],
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        tabBarGutter: PropTypes.any.def(null),
        tabPosition: PropTypes.string,
        panels: PropTypes.any.def([]), //props of pane; { key, tab }
        isVertical: PropTypes.bool,
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
        click(panel){
            if(panel.disabled || panel.disabled === '') return;
            this.$emit('tabClick', panel.key);
        }
    }
}
</script>
