<style lang="less"></style>
<template>
<div :class="classes" :style="contentStyles">
    <slot></slot>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'vTabContent',
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        animatedWithMargin: PropTypes.bool.def(true),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
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
    }
}
</script>
