<style lang="less" src="./style/index.less"></style>
<template>
<label :class="classes" @mouseenter="$emit('mouseenter', $event)" @mouseleave="$emit('mouseleave', $event)">
    <span :class="checkboxClasses">
        <input
          :name="GroupContext && GroupContext.name || name"
          :id="id"
          :type="type"
          :readOnly="readOnly"
          :disabled="isDisabled"
          :tabIndex="tabIndex"
          :class="`${prefixCls}-input`"
          :checked="!!isChecked"
          :autoFocus="autoFocus"
          ref="input"
          :value="value"
          v-bind="globalProps"
          v-on="$$listeners"
          @change="handleChange"
        />
        <span :class="`${prefixCls}-inner`" />
    </span><span v-if="$slots.default"><slot></slot></span>
</label>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp, type } from '../_util/props-util';
import events from '../common/events';
import emitter from '../common/emitter';
import { CHECKBOX } from './const';

export default {
    name: 'Checkbox',
    mixins: [events, emitter],
    exceptListeners: ['change', 'input', 'mouseenter', 'mouseleave'],
    inheritAttrs: false,
    model: {
        prop: 'checked',
    },
    inject: {
        InGroup: { default: undefined },
        GroupContext: { default: undefined },
    },
    data(){
        return {
            selfChecked: hasProp(this, 'checked') ? this.checked : this.defaultChecked,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-checkbox'),
        id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string.def('checkbox'),
        defaultChecked: PropTypes.bool.def(false),
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        isGroup: PropTypes.bool,
        value: PropTypes.any,
        indeterminate: PropTypes.bool,
        autoFocus: PropTypes.bool,
        tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        readOnly: PropTypes.bool,
    },
    computed: {
        isChecked(){
            const { InGroup, GroupContext, value, selfChecked } = this;
            if(!!InGroup){
                const { selfValue } = GroupContext;
                if(selfValue === undefined || selfValue === null) return false;
                let _type = type(selfValue);
                return ['string', 'number'].indexOf(_type) > -1 ? selfValue === value : selfValue.indexOf(value) > -1;
            }
            return selfChecked;
        },
        isDisabled(){
            const { GroupContext, disabled } = this;
            return (GroupContext && GroupContext.disabled) || disabled;
        },
        classes(){
            const { prefixCls, isChecked, isDisabled } = this;

            return {
                [`${prefixCls}-wrapper`]: true,
                [`${prefixCls}-wrapper-checked`]: isChecked,
                [`${prefixCls}-wrapper-disabled`]: isDisabled,
            }
        },
        checkboxClasses(){
            const { prefixCls, isChecked, isDisabled, indeterminate } = this;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-checked`]: isChecked,
                [`${prefixCls}-disabled`]: isDisabled,
                [`${prefixCls}-indeterminate`]: indeterminate,
            }
        },
        globalProps(){
            const { $attrs = {} } = this;
            return Object.keys($attrs).reduce((prev, key) => {
                let subkey = key.substr(0, 5);
                if(key === 'role' || subkey === 'aria-' || subkey === 'data-'){
                    prev[key] = $attrs[key];
                }
            }, {})
        },
    },
    watch: {
        checked(val) {
            this.selfChecked = val;
        },
    },
    methods: {
        handleChange(event) {
            const { disabled } = this;
            if(disabled) return;
            const targetChecked = event.target.checked;
            if(!hasProp(this, 'checked')){
                this.selfChecked = targetChecked
            }
            this.$emit('input', targetChecked);
            this.$emit('change', event);

            const { InGroup, value } = this;
            if(!!InGroup){
                this.$dispatch(InGroup, CHECKBOX.CHANGE, value, targetChecked, event);
            }
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
