<style lang="less" src="./style/index.less"></style>
<template>
<vInput ref="input" :class="classes" v-bind="inputProps"
    v-on="$$listeners" @focus="onFocus" @blur="onBlur" @change="handleChange" @keydown="onKeydown" @keyup="onKeyup"
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
    exceptListeners: ['focus', 'blur', 'input', 'change', 'keydown', 'keyup'],
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
            if(precision === undefined || precision === null) return undefined;
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
            this.focused = true
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.focused = false
            this.handlePrecision(e);
            this.$emit('blur', e);
        },
        onKeydown(e){
            const { keyCode } = e;
            if(keyCode === 38 || keyCode === 40){
                this.handleStep(e, keyCode === 38 ? 1 : -1);
            }
            this.keyCode = keyCode;
        },
        onKeyup(e){
            const { keyCode } = e;
            if(keyCode === 38 || keyCode === 40){
                this.stop();
            }
        },
        handlePrecision(e){
            let { selfValue: value } = this;
            if(value === '' || value === null || value === undefined) return;
            this.update(e, value, true)
        },
        handleChange(e){
            let value = e.target.value;
            // console.log('selectionStart', e.target.selectionStart, 'selectionEnd', e.target.selectionEnd, e.target.value);
            value = this.getCurrentValue(value);
            let { inputDisplayValue: prevValue } = this;
            let { value: _value, selectionStart, selectionEnd } = e.target;
            let rval = _value[e.target.selectionEnd];
            let rlen = _value.length - e.target.selectionEnd

            if(numberRegexp.test(value)){
                this.update(e, value)
            }

            this.$forceUpdate();
            this.$nextTick(() => {
                let cval = this.inputDisplayValue;
                let clen = cval.length;
                if((rval === undefined || this.keyCode === 8) && prevValue !== this.inputDisplayValue){
                    e.target.setSelectionRange(clen - (selectionEnd - selectionStart + rlen), clen - rlen);
                }else if(prevValue === this.inputDisplayValue){
                    e.target.setSelectionRange(selectionStart, selectionEnd);
                }else {
                    let _len = clen + 1 - rlen;
                    let _rval = cval[_len];
                    do{
                        _len = _len - 1;
                        _rval = cval[_len];
                    }while(_rval !== rval && _len > 0)
                    selectionStart = selectionStart - (selectionEnd - _len);
                    if(selectionStart < 0){
                        selectionStart = 0;
                    }
                    e.target.setSelectionRange(selectionStart, _len);
                }
                this.keyCode = undefined;
            });
        },
        update(e, value, force){
            const { min, max, selfPrecision: precision } = this;

            if(value !== '' && force){
                let _value = parseFloat(value);
                _value = _value < min ? min : _value > max ? max : _value;
                if(precision !== undefined){
                    _value = _value.toFixed(precision);
                }
                value = _value;
            }

            if(value + '' === this.selfValue + '') return;

            // if(parseFloat(value) === parseFloat(this.selfValue) && !force) return;
            if(!hasProp(this, 'value')){
                this.selfValue = value;
            }
            this.$emit('input', value);
            // console.log('change', value)
            this.$emit('change', value);
        },
        handleStep(e, dir, recursive){
            this.stop();

            let { selfValue: value, selfStep: step, selfPrecision: precision } = this;

            if(isNaN(value) || !value){
                value = 0;
            }

            let bit = Math.max(getPrecisionLength(value), getPrecisionLength(step));
            value = Math.round((parseFloat(value) + dir * step) * Math.pow(10, bit)) / Math.pow(10, bit);

            if(precision !== undefined && getPrecisionLength(value) < precision){
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
