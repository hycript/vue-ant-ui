<style lang="less"></style>
<template>
<div :class="classes" :style="contentStyles">
    <vnode :destroyInactiveTabPane="true" :active="true" > <!-- :propGenerators="{ active: isActive }"-->
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
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        animatedWithMargin: PropTypes.bool.def(true),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        destroyInactiveTabPane: PropTypes.bool.def(false),
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
            const { activeKey, tabBarPosition, animated, animatedWithMargin, classes } = this;
            return {

            }
        }
    },
    methods: {
        isActive(vnode, data){
            const { activeKey } = this;
            console.error('vnode', vnode.key, activeKey, activeKey === vnode.key)
            return activeKey === vnode.key;
        }
    }
}
</script>
