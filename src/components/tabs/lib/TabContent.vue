<style lang="less"></style>
<template>
<div :class="classes" :style="contentStyles">
    <vnode :propGenerator="generatorPaneProps">
        <slot></slot>
    </vnode>
</div>
</template>
<script>
import PropTypes from '../../_util/vue-types';
import vnode from '../../common/vnode';

export default {
    name: 'TabContent',
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        activeIndex: PropTypes.number,
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        animatedWithMargin: PropTypes.bool.def(true),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        destroyInactiveTabPane: PropTypes.bool.def(false),
        isVertical: PropTypes.bool,
    },
    computed: {
        classes(){
            const { animated, prefixCls } = this;
            return {
                [`${prefixCls}-content`]: true,
                [animated ? `${prefixCls}-content-animated` : `${prefixCls}-content-no-animated`]: true,
            }
        },
        contentStyles(){
            const { activeIndex, animated, animatedWithMargin, isVertical } = this;
            let style = {}
            if(!animated || !this.$slots.default) return;
            if(activeIndex === -1) return { display: 'none' };
            if(animatedWithMargin){
                style[isVertical ? 'marginTop' : 'marginLeft'] = `${-activeIndex * 100}%`;
            }else{
                const translate = isVertical ? 'translateY' : 'translateX';
                style['transform'] = `${translate}(${-activeIndex * 100}%) translateZ(0)`
            }
            return style;
        }
    },
    methods: {
        generatorPaneProps(vnode, data){
            const { activeKey, destroyInactiveTabPane, prefixCls } = this;
            // console.error('vnode isActive', vnode.key, activeKey, activeKey === vnode.key)
            let active = activeKey === vnode.key;
            return {
                destroyInactiveTabPane,
                activeKey,
                active,
                prefixCls,
            }
        }
    }
}
</script>
