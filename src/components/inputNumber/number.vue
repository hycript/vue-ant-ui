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
        defaultValue: PropTypes.number,
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
        inputProps(){
            const { selfValue: value, disabled, size, placeholder, name, id, autoFocus, prefixCls } = this;
            return {
                value, disabled, size, placeholder, name, id, autoFocus, inputClass: `${prefixCls}-input`,
            }
        },
        upDisabled(){
            const { max, selfValue } = this;
            if(max === undefined || max === null) return false;
            return selfValue >= max;
        },
        downDisabled(){
            const { min, selfValue } = this;
            if(min === undefined || min === null) return false;
            return selfValue <= min;
        }
    },
    beforeDestroy(){
        this.stop();
    },
    methods: {
        focus(e) {
            this.$refs.input.focus();
        },
        blur() {
            this.focused = false
            this.$refs.input.blur();
        },
        onFocus(e){
            this.focused = true
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.handlePrecision(e);
            this.$emit('blur', e);
        },
        handlePrecision(e){
            let { selfValue: value, precision } = this;
            console.log('precision', precision, value);
            if(precision === undefined || precision === null) return;
            if(getPrecisionLength(value) === precision) return;
            value = parseFloat(value).toFixed(precision);
            this.update(e, value)
        },
        handleChange(e){
            let value = e.target.value;
            if(numberRegexp.test(value)){
                this.update(e, value)
            }
            this.$nextTick(this.$forceUpdate);
        },
        update(e, value){
            const { min, max } = this;

            if(value !== ''){
                let _value = parseFloat(value);
                _value = _value < min ? min : _value > max ? max : _value;
                if(_value !== parseFloat(value)){
                    value = _value;
                }
            }

            if(value === this.selfValue) return;
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
            let { selfValue: value, step } = this;
            if(isNaN(value) || !value){
                value = 0;
            }
            let bit = Math.max(getPrecisionLength(value), getPrecisionLength(step));
            value = Math.round((parseFloat(value) + dir * step) * Math.pow(10, bit)) / Math.pow(10, bit);
            this.update(e, value);
            this.focus();
            this.autoStepTimer = setTimeout(() => {
                this.handleStep(e, dir, true);
            }, recursive ? SPEED : DELAY)
        },
        stop() {
            if (this.autoStepTimer) {
                clearTimeout(this.autoStepTimer);
                this.autoStepTimer = null;
            }
        },
    }
}

function getPrecisionLength(value){
    return (value + '').replace(/^(\d+\.?)/, '').length;
}

</script>
