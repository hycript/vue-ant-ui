<style lang="less"></style>
<template>
<div>
    <div v-for="panel in panels" :key="panel.key"
        :class="[activeKey === panel.key ? `${prefixCls}-tab-active` : '', `${prefixCls}-tab`, panel.disabled || panel.disabled === '' ?  `${prefixCls}-tab-disabled` : '']"
        role="tab" :aria-disabled="panel.disabled || panel.disabled === '' ? 'true' : 'false'"
        :aria-selected="activeKey === panel.key ? 'true' : 'false'"
        :style="getTabStyles(index)"
        @click="click(panel)"
    >
        {{ panel.tab }}
    </div>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'TabBarTabsNode',
    props: {
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        panels: PropTypes.any.def([]), //props of pane; { key, tab }
        prefixCls: PropTypes.string.def(''),
        tabBarGutter: PropTypes.any.def(null),
        tabPosition: PropTypes.string,
    },
    computed: {
        isVertical(){
            const { tabPosition } = this;
            return tabPosition === 'left' || tabPosition === 'right';
        },
    },
    methods: {
        getTabStyles(index){
            const { isVertical, panels, tabBarGutter } = this;
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
