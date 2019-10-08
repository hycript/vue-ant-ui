<style lang="less" src="./style/index.less"></style>
<template>
<vInput ref="input" :class="classes" v-bind="inputProps"
    v-on="$$listeners" @focus="onFocus" @blur="onBlur" @change="handleChange"
>
    <div slot="suffix" :class="`${prefixCls}-handler-wrap`">
        <HandlerButton type="up" :disabled="upDisabled" :prefixCls="prefixCls"
            @start="handleStep($event, 1)" @end="stop">
            <Icon type="up" :class="`${prefixCls}-handler-up-inner`" ></Icon>
        </HandlerButton>
        <HandlerButton type="down" :disabled="downDisabled" :prefixCls="prefixCls"
            @start="handleStep($event, -1)" @end="stop">
            <Icon type="down" :class="`${prefixCls}-handler-down-inner`" ></Icon>
        </HandlerButton>
    </div>
</vInput>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import { omit } from '../_util/lodash';
import events from '../common/events';
import vInput from '../input';
import Icon from '../icon';
import HandlerButton from './lib/handlerButton';

const numberRegexp = /^[-+]?(\d*(\.\d*)?)?$/;
const SPEED = 200;
const DELAY = 600;

export default {
    name: 'InputNumber',
    mixins: [events],
    exceptListeners: ['focus', 'blur', 'input', 'change'],
    components: {
        vInput,
        Icon,
        HandlerButton,
    },
    data(){
        const { value, defaultValue } = this;
        let _value = hasProp(this, 'value') ? value : defaultValue;
        if(isNaN){

        }
        return {
            focused: false,
            selfValue: (hasProp(this, 'value') ? value : defaultValue) || '',
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-input-number'),
        min: PropTypes.number.def(-Infinity),
        max: PropTypes.number.def(Infinity),
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).def(1),
        defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool,
        size: PropTypes.oneOf(['large', 'small', 'default']),
        formatter: PropTypes.func,
        parser: PropTypes.func,
        decimalSeparator: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
        precision: PropTypes.number,
        autoFocus: PropTypes.bool,
    },
    computed: {
        classes(){
            const { prefixCls, size, disabled, focused } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-focused`]: focused,
            }
        },
        upDisabled(){
            const { max, selfValue } = this;
            if(max === undefined || max === null || selfValue === '') return false;
            return selfValue >= max;
        },
        downDisabled(){
            const { min, selfValue } = this;
            if(min === undefined || min === null || selfValue === '') return false;
            return selfValue <= min;
        },
        selfStep(){
            let { step } = this;
            step = parseFloat(step);
            if(isNaN(step)){
                step = 1;
            }
            return step;
        },
        selfPrecision(){
            let { precision } = this;
            if(isNaN(precision) || precision < 0) return 0;
            if(precision > 100) return 100
            return precision;
        },
        inputDisplayValue(){
            const { selfValue, formatter } = this;
            if(typeof formatter === 'function'){
                let value = formatter(selfValue);
                if(value === undefined || value === null || (typeof value === 'number' && isNaN(value))) return '';
                return value;
            }
            return selfValue;
        },
        inputProps(){
            const { inputDisplayValue: value, disabled, size, placeholder, name, id, autoFocus, prefixCls } = this;
            return {
                value, disabled, size, placeholder, name, id, autoFocus, inputClass: `${prefixCls}-input`,
            }
        },
    },
    beforeDestroy(){
        this.stop();
    },
    methods: {
        focus(e) {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        onFocus(e){
            console.log('focus');
            this.focused = true
            this.$emit('focus', e);
        },
        onBlur(e) {
            console.log('blur');
            this.focused = false
            this.handlePrecision(e);
            this.$emit('blur', e);
        },
        handlePrecision(e){
            let { selfValue: value, selfPrecision: precision } = this;
            if(value === '' || value === null || value === undefined) return;
            console.log('precision', precision, value);
            if(precision === undefined || precision === null) return;
            if(getPrecisionLength(value) === precision) return;
            value = parseFloat(value).toFixed(precision);
            this.update(e, value, true)
        },
        handleChange(e){
            let value = e.target.value;
            value = this.getCurrentValue(value);
            if(numberRegexp.test(value)){
                this.update(e, value)
            }
            this.$nextTick(this.$forceUpdate);
        },
        update(e, value, force){
            const { min, max, selfPrecision: precision } = this;

            if(value !== '' && force){
                let _value = parseFloat(value);
                _value = _value < min ? min : _value > max ? max : _value;
                if(_value !== parseFloat(value)){
                    value = _value.toFixed(precision);
                }
            }

            // if(parseFloat(value) === parseFloat(this.selfValue) && !force) return;
            if(!hasProp(this, 'value')){
                this.selfValue = value;
            }
            e.target.value = value;
            this.$emit('input', value);
            console.log('change', value)
            // this.$emit('change', e);
            this.$emit('change', value);
        },
        handleStep(e, dir, recursive){
            console.log('xx')
            let { selfValue: value, selfStep: step, selfPrecision: precision } = this;

            if(isNaN(value) || !value){
                value = 0;
            }

            let bit = Math.max(getPrecisionLength(value), getPrecisionLength(step));
            value = Math.round((parseFloat(value) + dir * step) * Math.pow(10, bit)) / Math.pow(10, bit);
            console.log('update', value);
            if(getPrecisionLength(value) < precision){
                value = value.toFixed(precision);
            }
            this.update(e, value, true);
            this.autoStepTimer = setTimeout(() => {
                this.handleStep(e, dir, true);
            }, recursive ? SPEED : DELAY)
        },
        stop() {
            if (this.autoStepTimer) {
                clearTimeout(this.autoStepTimer);
                this.autoStepTimer = null;
                this.focus();
            }
        },
        getCurrentValue(value){
            const { parser } = this;
            if(typeof parser === 'function'){
                return parser(value)
            }
            return value;
        }
    }
}

function getPrecisionLength(value){
    return (value + '').replace(/^(\d+\.?)/, '').length;
}

</script>
