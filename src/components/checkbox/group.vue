<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-group`">
    <template v-if="options && options.length">
        <!-- @change="checked => toggleOption(option, checked)" -->
        <Checkbox
            v-for="option in checkboxOptions"
            :prefixCls="prefixCls" :key="option.value"
            :disabled="disabled || option.disabled"
            :value="option.value"
            :checked="selfValue.indexOf(option.value) !== -1"
            @change="option.onChange || function(){}"
            :class="`${prefixCls}-group-item`"
        >
            <slot name="label" v-bind="option">{{ option.label }}</slot>
        </Checkbox>
    </template>
    <slot v-else></slot>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import Checkbox from './checkbox';

const name = 'CheckboxGroup'

export default {
    name,
    components: {
        Checkbox,
    },
    model: {
        prop: 'value'
    },
    provide: {
        inGroup: name,
    },
    data(){
        return {
            selfValue: this.value || this.defaultValue || [],
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-checkbox'),
        defaultValue: PropTypes.array,
        value: PropTypes.array,
        options: PropTypes.array.def([]),
        disabled: PropTypes.bool,
    },
    computed: {
        checkboxOptions(){
            const { options, disabled } = this;
            return options.map(option => {
                return typeof option === 'string' ? { label: option, value: option } : option;
            })
        },
    },
    watch: {
        value(val) {
            this.selfValue = val;
        }
    },
    created(){
        this.$on('checkboxChange', this.fromChecboxToggle);
    },
    methods: {
        toggleOption(option, checked){
            const { selfValue } = this;
            const value = [].concat(selfValue);
            const index = value.indexOf(option.value);
            if (index === -1) {
                value.push(option.value);
            } else {
                value.splice(index, 1);
            }
            if(!hasProp(this, 'value')){
                this.selfValue = value;
            }
            this.$emit('input', value);
            this.$emit('change', value);
            /* if(typeof option.onChange === 'function'){
                option.onChange(checked);
            } */
        },
        fromChecboxToggle(value, checked){
            // const { options } = this;
            // if(options && options.length) return;
            this.toggleOption({ value }, checked);
        },
    }
}
</script>
