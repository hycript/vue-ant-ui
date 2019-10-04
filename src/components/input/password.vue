<style lang="less" src="./style/index.less"></style>
<template>
<vInput ref="input"
    :class="[prefixCls, size ? `${prefixCls}-${size}` : '']"
    v-on="$$listeners" v-bind="inputProps" @pressEnter="onPressEnter"
>
    <template slot="addonBefore"><slot name="addonBefore"></slot></template>
    <template slot="addonAfter"><slot name="addonAfter"></slot></template>
    <template slot="prefix"><slot name="prefix"></slot></template>
    <template slot="suffix">
        <Icon v-if="visibilityToggle" :class="`${prefixCls}-icon`" @click="toggleVisible" :type="visible ? 'eye' : 'eye-invisible'" key="passwordIcon" theme="outlined"/>
        <slot name="suffix"></slot>
    </template>
</vInput>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import { omit } from '../_util/lodash';
import events from '../common/events';
import inputProps from './inputProps';
import vInput from './input';
import Icon from '../icon';

export default {
    name: 'InputPassword',
    mixins: [events],
    exceptListeners: ['search', 'pressEnter'],
    components: {
        vInput,
        Icon,
    },
    inheritAttrs: false,
    data(){
        return {
            visible: false,
        }
    },
    props: {
        ...inputProps,
        prefixCls: PropTypes.string.def('ant-input-password'),
        inputPrefixCls: PropTypes.string.def('ant-input'),
        action: PropTypes.string.def('click'),
        visibilityToggle: PropTypes.bool.def(true),
    },
    computed: {
        inputProps() {
            const { visible } = this;
            const props = omit(this.$props, ['prefixCls', 'inputPrefixCls', 'type']);
            if(!hasProp(this, 'value')){
                delete props.value;
            }
            props.prefixCls = this.inputPrefixCls;
            props.type = visible ? 'text' : 'password';
            return props;
        },
    },
    methods: {
        onPressEnter(e){
            this.$emit('pressEnter', e);
        },
        toggleVisible(){
            const { visible, disabled } = this;
            if(disabled) return;
            this.visible = !visible;
            this.focus();
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
    }
}
</script>
