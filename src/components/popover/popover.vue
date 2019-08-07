<style lang="less">
@import './style/index.less';
.@{popover-prefix-cls} {
    &-wrapper {
        display: inline-block;
    }
}
</style>
<template>
<div :class="`${prefixCls}-wrapper`" @mouseenter="onMouseenter" @mouseleave="onMouseleave" @click="onClick" @contextmenu="onContextmenu">
    <!-- @focus="onFocus" @blur="onBlur" -->
    <slot :show="show" :hide="hide" :visible="selfVisible"></slot>
    <vTransition>
        <Align v-if="selfVisible" :target="getTarget" :align="selfPlacement" :monitorWindowResize="true" :style="originStyle">
            <div ref="contents" :class="classes">
                <div :class="[`${prefixCls}-content`]">
                    <slot name="contents" :hide="hide" :show="show" :visible="selfVisible">
                        <div :class="[`${prefixCls}-arrow`]"></div>
                        <div :class="[`${prefixCls}-inner`, overlayClassName || '']" :style="overlayStyle">
                            <div>
                                <div :class="`${prefixCls}-title`">
                                    <slot name="title" :hide="hide" :show="show" :visible="selfVisible">{{ title }}</slot>
                                </div>
                                <div :class="`${prefixCls}-inner-content`">
                                    <slot name="content" :hide="hide" :show="show" :visible="selfVisible">{{ content }}</slot>
                                </div>
                            </div>
                        </div>
                    </slot>
                </div>
            </div>
        </Align>
    </vTransition>
</div>

</template>
<script>
import PropTypes from '~utils/vue-types';
import Tooltip from '../tooltip/tooltip';

export default {
    extends: Tooltip,
    props: {
        prefixCls: PropTypes.string.def('ant-popover'),
        transitionName: PropTypes.string.def('zoom-big'),
        title: PropTypes.any,
        content: PropTypes.any,
    },
}
</script>
