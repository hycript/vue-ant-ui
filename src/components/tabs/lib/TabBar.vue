<style></style>
<template>
<div role="tablist" :class="classes" tabIndex="0" @keydown="$emit('keydown', $event)"> <!--  @keydown="onKeyDown" -->
    <vnode :vnodesReverse="isVertical">
        <div key="extra" :class="`${prefixCls}-extra-content`" :style="tabBarExtraContentStyle">
            <span>
                <Icon v-if="type === 'editable-card' && !hideAdd" type="plus" @click="$emit('createNewTab')" :class="`${prefixCls}-new-tab`"/>
                <slot name="tabBarExtraContent"></slot>
            </span>
        </div>
        <ScrollableTabBarNode v-bind="{ ...$props, inkBarAnimated }" key="content"></ScrollableTabBarNode>
    </vnode>
</div>
</template>
<script>
import PropTypes from '../../_util/vue-types';
import vnode from '../../common/vnode';
import Icon from '../../icon';
import ScrollableTabBarNode from './ScrollableTabBarNode';

export default {
    name: 'TabBar',
    components: {
        vnode,
        Icon,
        ScrollableTabBarNode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        activeIndex: PropTypes.number,
        hideAdd: PropTypes.bool.def(false),
        type: PropTypes.oneOf(['line', 'card', 'editable-card']),
        tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
        size: PropTypes.oneOf(['default', 'small', 'large']),
        // inkBarAnimated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        tabBarGutter: PropTypes.number,
        isVertical: PropTypes.bool,
        panels: PropTypes.array,
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
        tabBarExtraContentStyle(){
            const { isVertical } = this;
            return !isVertical ? { float: 'right' } : {};
        },
        inkBarAnimated(){
            const { animated } = this;
            const inkBarAnimated = typeof animated === 'object' ? animated.inkBar : animated;
            return inkBarAnimated;
        }
    },
}
</script>
