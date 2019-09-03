<style lang="less">
@import './style/index.less';
.@{popover-prefix-cls} {
    &-wrapper {
        display: inline-block;
    }
}
</style>
<template>
<Tooltip ref="tooltip" v-bind="$props" v-on="$listeners">
    <template slot-scope="{ show, hide, visible }">
        <slot :show="show" :hide="hide" :visible="visible"></slot>
    </template>
    <template slot="contents" slot-scope="{ show, hide, visible }">
        <slot :show="show" :hide="hide" :visible="visible" name="contents">
            <div :class="[`${prefixCls}-arrow`]"></div>
            <div :class="[`${prefixCls}-inner`, overlayClassName || '']" :style="overlayStyle">
                <div :class="`${prefixCls}-inner-content`">
                    <div :class="`${prefixCls}-message`">
                        <slot name="icon">
                            <Icon type='exclamation-circle' />
                        </slot>
                        <div :class="`${prefixCls}-message-title`">
                            <slot name="title">
                            {{ title }}
                            </slot>
                        </div>
                    </div>
                    <div :class="`${prefixCls}-buttons`">
                        <Button @click="onCancel" size='small'>
                            <slot name="cancel">
                                {{ cancelText }}
                            </slot>
                        </Button>
                        <Button @click="onConfirm" :type="okType" size='small'>
                            <slot name="ok">
                                {{ okText }}
                            </slot>
                        </Button>
                    </div>
                </div>
            </div>
        </slot>
    </template>
</Tooltip>
</template>
<script>
import PropTypes from '~utils/vue-types';
import Tooltip from '../tooltip/tooltip';
import { abstractTooltipProps, triggerType } from '../tooltip/abstractTooltipProps.js';
import Icon from '../icon/icon';
import { buttonType } from '../button';
import Button from '../button/button';

export default {
    name: 'Popconfirm',
    components: {
        Tooltip,
        Icon,
        Button,
    },
    model: {
        prop: 'visible',
    },
    props: {
        ...abstractTooltipProps,
        prefixCls: PropTypes.string.def('ant-popover'),
        transitionName: PropTypes.string.def('zoom-big'),
        title: PropTypes.any,
        trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]).def('click'),
        okText: PropTypes.string.def('确定'),
        okType: PropTypes.oneOf(buttonType).def('primary'),
        cancelText: PropTypes.string.def('取消'),
    },
    methods: {
        onCancel(){
            this.$refs.tooltip.hide();
            this.$emit('cancel', event);
        },
        onConfirm(event){
            this.$refs.tooltip.hide();
            this.$emit('confirm', event);
        }
    }
}
</script>
