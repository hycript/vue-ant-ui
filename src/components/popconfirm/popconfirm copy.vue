<style lang="less" src="./style/index.less"></style>
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
                            <div :class="`${prefixCls}-inner-content`">
                                <div :class="`${prefixCls}-message`">
                                    <slot name="title">
                                        <Icon type='exclamation-circle' />
                                        <div :class="`${prefixCls}-message-title`">
                                            {{ title }}
                                        </div>
                                    </slot>
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
                </div>
            </div>
        </Align>
    </vTransition>
</div>

</template>
<script>
import PropTypes from '~utils/vue-types';
import Tooltip from '../tooltip/tooltip';
import Icon from '../icon/icon';
import { buttonType } from '../button';
import Button from '../button/button';

export default {
    name: 'Popconfirm',
    extends: Tooltip,
    components: {
        Icon,
        Button,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-popover'),
        transitionName: PropTypes.string.def('zoom-big'),
        title: PropTypes.any,
        okText: PropTypes.string.def('确定'),
        okType: PropTypes.oneOf(buttonType).def('primary'),
        cancelText: PropTypes.string.def('取消'),
    },
    methods: {
        onCancel(){
            this.hide();
            this.$emit('cancel', event);
        },
        onConfirm(event){
            this.hide();
            this.$emit('confirm', event);
        }
    },
}
</script>
