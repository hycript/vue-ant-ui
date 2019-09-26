<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-group`" v-on="$$listeners">
    <template v-if="options && options.length">
        <!-- :checked="selfValue === option.value" -->
        <Radio
            v-for="option in radioOptions"
            :prefixCls="prefixCls" :key="option.value"
            :disabled="disabled || option.disabled"
            :value="option.value"
            :class="`${prefixCls}-group-item`"
            v-on="option.onChange ? { change: option.onChange } : {}"
        >
            <slot name="label" v-bind="option">{{ option.label }}</slot>
        </Radio>
    </template>
    <slot v-else></slot>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import events from '../common/events';
import Radio from './radio';
import { CHECKBOX } from '../checkbox/const';

const name = 'RadioGroup'

export default {
    name,
    mixins: [events],
    exceptListeners: ['change', 'input'],
    components: {
        Radio,
    },
    model: {
        prop: 'value'
    },
    provide(){
        return {
            InGroup: name,
            GroupContext: this,
        }
    },
    data(){
        return {
            selfValue: this.value || this.defaultValue,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-radio'),
        defaultValue: PropTypes.any,
        name: PropTypes.any,
        value: PropTypes.any,
        options: PropTypes.array.def([]),
        disabled: PropTypes.bool,
        size: PropTypes.oneOf(['large', 'default', 'small']),
        buttonStyle: PropTypes.string.def('outline'),
    },
    computed: {
        radioOptions() {
            const { options, disabled } = this;
            return options.map(option => {
                return typeof option === 'string' ? { label: option, value: option } : option;
            });
        },
        classes(){
            const { prefixCls, buttonStyle, size } = this;
            const groupPrefixCls = `${prefixCls}-group`;
            return {
                [groupPrefixCls]: true,
                [`${groupPrefixCls}-${buttonStyle}`]: buttonStyle,
                [`${groupPrefixCls}-${size}`]: size,
            }
        },
    },
    watch: {
        value(val) {
            this.selfValue = val;
        }
    },
    created(){
        this.$on(CHECKBOX.CHANGE, this.fromChecboxToggle);
    },
    methods: {
        toggleOption(option){
            const { selfValue } = this;
            const { value } = option;
            if(value === selfValue) return;

            if(!hasProp(this, 'value')){
                this.selfValue = value;
            }

            this.$emit('input', value);
            this.$emit('change', value);
        },
        fromChecboxToggle(value){
            // const { options } = this;
            // if(options && options.length) return;
            this.toggleOption({ value });
        },
    }
}
</script>
