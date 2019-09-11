<style></style>
<template>
<div role="tablist" :class="classes" tabIndex="0" @keydown="onKeyDown">
    <vnode key="extra" :style="tabBarExtraContentStyle">
        <slot name="extraContent"></slot>
    </vnode>
    <vnode key="content">
        <slot></slot>
    </vnode>
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import vnode from '../../common/vnode';

export default {
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        type: PropTypes.oneOf(['line', 'card', 'editable-card']),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        inkBarAnimated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        tabBarGutter: PropTypes.number,
    },
    computed: {
        classes(){
            const { prefixCls, tabPosition, size, type } = this;
            return {
                [`${prefixCls}-bar`]: true,
                [`${prefixCls}-${tabPosition}-bar`]: true,
                [`${prefixCls}-${size}-bar`]: !!size,
                [`${prefixCls}-card-bar`]: type && type.indexOf('card') >= 0,
            }
        },
        topOrBottom(){
            const { tabPosition } = this;
            return tabPosition === 'top' || tabPosition === 'bottom';
        },
        tabBarExtraContentStyle(){
            const { topOrBottom } = this;
            return topOrBottom ? { float: 'right' } : {};
        }
    }
}
</script>
