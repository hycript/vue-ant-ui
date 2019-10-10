<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-group`" v-on="$$listeners">
    <template v-if="options && options.length">
        <!-- :checked="selfValue.indexOf(option.value) !== -1" -->
        <Checkbox
            v-for="option in checkboxOptions"
            :prefixCls="prefixCls" :key="option.value"
            :disabled="disabled || option.disabled"
            :value="option.value"
            v-on="option.onChange ? { change: option.onChange } : {}"
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
import { hasProp } from '../_util/tool';
import events from '../common/events';
import Checkbox from './checkbox';
import { CHECKBOX } from './const';

const name = 'CheckboxGroup'

export default {
    name,
    mixins: [events],
    exceptListeners: ['change', 'input'],
    components: {
        Checkbox,
    },
    model: {
        prop: 'value'
    },
    provide() {
        return {
            InGroup: name,
            GroupContext: this,
        }
    },
    data(){
        return {
            selfValue: this.value || this.defaultValue || [],
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-checkbox'),
        defaultValue: PropTypes.array,
        value: PropTypes.any,
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
        this.$on(CHECKBOX.CHANGE, this.fromChecboxToggle);
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
        },
        fromChecboxToggle(value, checked){
            // const { options } = this;
            // if(options && options.length) return;
            this.toggleOption({ value }, checked);
        },
    }
}
</script>
