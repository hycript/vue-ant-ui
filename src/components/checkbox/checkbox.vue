<style lang="less" src="./style/index.less"></style>
<template>
<label :class="classes" @mouseenter="$emit('mouseenter', $event)" @mouseleave="$emit('mouseleave', $event)">
    <span :class="checkboxClasses">
        <input
          :name="name"
          :id="id"
          :type="type"
          :readOnly="readOnly"
          :disabled="disabled"
          :tabIndex="tabIndex"
          :class="`${prefixCls}-input`"
          :checked="!!selfChecked"
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
import { hasProp } from '../_util/props-util';
import events from '../common/events';
import emitter from '../common/emitter';

export default {
    name: 'Checkbox',
    mixins: [events, emitter],
    exceptListeners: ['change', 'input', 'mouseenter', 'mouseleave'],
    inheritAttrs: false,
    model: {
        prop: 'checked',
    },
    inject: {
        inGroup: { default: undefined }
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
        classes(){
            const { prefixCls, checked, disabled } = this;

            return {
                [`${prefixCls}-wrapper`]: true,
                [`${prefixCls}-wrapper-checked`]: checked,
                [`${prefixCls}-wrapper-disabled`]: disabled,
            }
        },
        checkboxClasses(){
            const { prefixCls, selfChecked, disabled, indeterminate } = this;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-checked`]: selfChecked,
                [`${prefixCls}-disabled`]: disabled,
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
        }
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

            const { inGroup, value } = this;
            if(!!inGroup){
                this.$dispatch(inGroup, 'checkboxChange', value, targetChecked);
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