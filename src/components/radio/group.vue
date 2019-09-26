<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-group`" v-on="$$listeners">
    <template v-if="options && options.length">
        <!-- @change="checked => toggleOption(option, checked)" -->
        <Radio
            v-for="option in radioOptions"
            :prefixCls="prefixCls" :key="option.value"
            :disabled="disabled || option.disabled"
            :value="option.value"
            :checked="selfValue.indexOf(option.value) !== -1"
            @change="option.onChange || function(){}"
            :class="`${prefixCls}-group-item`"
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
    provide: {
        inGroup: name,
    },
    data(){
        return {
            selfValue: this.value || this.defaultValue,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-radio'),
        defaultValue: PropTypes.array,
        name: PropTypes.name,
        value: PropTypes.array,
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
    },
    watch: {
        value(val) {
            this.selfValue = val;
        }
    },
    created(){
        this.noop = function(){};
        this.$on('checkboxChange', this.fromChecboxToggle);
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
