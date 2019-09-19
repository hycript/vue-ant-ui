<style lang="less">
@import './style/index.less';
.@{popover-prefix-cls} {
    &-wrapper {
        display: inline-block;
    }
}
</style>
<template>
<Tooltip v-bind="$props" v-on="$listeners">
    <template slot-scope="{ show, hide, visible }">
        <slot :show="show" :hide="hide" :visible="visible"></slot>
    </template>
    <template slot="contents" slot-scope="{ show, hide, visible }">
        <slot :show="show" :hide="hide" :visible="visible" name="contents">
            <div :class="[`${prefixCls}-arrow`]"></div>
            <div :class="[`${prefixCls}-inner`, overlayClassName || '']" :style="overlayStyle">
                <div>
                    <div :class="`${prefixCls}-title`">
                        <slot name="title" :hide="hide" :show="show" :visible="visible">{{ title }}</slot>
                    </div>
                    <div :class="`${prefixCls}-inner-content`">
                        <slot name="content" :hide="hide" :show="show" :visible="visible">{{ content }}</slot>
                    </div>
                </div>
            </div>
        </slot>
    </template>
</Tooltip>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Tooltip from '../tooltip';
import abstractTooltipProps from '../tooltip/abstractTooltipProps.js';

export default {
    name: 'Popover',
    components: {
        Tooltip,
    },
    model: {
        prop: 'visible',
    },
    props: {
        ...abstractTooltipProps,
        prefixCls: PropTypes.string.def('ant-popover'),
        transitionName: PropTypes.string.def('zoom-big'),
        title: PropTypes.any,
        content: PropTypes.any,
    },
}
</script>
