<style lang="less" src="./style/index.less"></style>
<template>
<AddonWrapper v-bind="$props">
    <template slot="addonBefore"><slot name="addonBefore"></slot></template>
    <AffixWrapper :class="[ ($slots.suffix || suffix) && allowClear && !!selfValue ? `${prefixCls}-affix-wrapper-with-clear-btn` : '']" v-bind="$props">
        <template slot="prefix"><slot name="prefix"></slot></template>
        <template slot="suffix">
            <!-- <template v-if="allowClear"> -->
                <Icon v-if="allowClear && !!selfValue" :class="`${prefixCls}-clear-icon`" type="close-circle" @click="handleReset" role="button"/>
            <!-- </template> -->
            <slot name="suffix"></slot>
        </template>
        <input ref="input" :class="inputClasses"
            v-bind="inputProps" :value="selfValue"
            v-on="$$listeners" @keydown="handleKeydown" @input="handleChange"
            @compositionstart="handleCompositionStart" @compositionend="handleCompositionEnd"
        />
    </AffixWrapper>
    <template slot="addonAfter"><slot name="addonAfter"></slot></template>
</AddonWrapper>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { omit } from '../_util/lodash';
import { is, hasProp } from '../_util/tool';
import inputProps from './inputProps';
import inputMixin from './inputMixin';
import AddonWrapper from './lib/addonWrapper';
import AffixWrapper from './lib/affixWrapper';
import Icon from '../icon';

export default {
    name: 'Input',
    mixins: [inputMixin],
    inheritAttrs: false,
    components: {
        AddonWrapper,
        AffixWrapper,
        Icon,
    },
    /* model: {
        prop: 'value',
        // event: INPUT.CHANGE,
    }, */
    data(){
        const { value, defaultValue } = this;
        return {
            selfValue: (hasProp(this, 'value') ? value : defaultValue) || '',
        }
    },
    props: {
        ...inputProps,
        prefixCls: PropTypes.string.def('ant-input'),
        // format: PropTypes.any, //regexp, function
        format: {
            validator(value) {
                return is(value, 'function') || is(value, 'regexp');
            },
        }
    },
    computed: {
        inputClasses(){
            const { type, prefixCls, size, disabled } = this;
            if(type === 'textarea') return;
            let { inputClass } = this;
            if(inputClass){
                if(is(inputClass, 'array')){
                    inputClass = { [inputClass.join(' ')]: true };
                }else if(is(inputClass, 'string')){
                    inputClass = { [inputClass]: true };
                }
            }
            return Object.assign({
                [`${prefixCls}`]: true,
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-disabled`]: disabled,
            }, inputClass);
        },
        inputProps(){
            const { type, $attrs } = this;
            if(type === 'textarea') return {};
            const props = omit(this.$props, ['prefixCls', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'value', 'defaultValue', 'inputClass']);

            Object.assign(props, $attrs);
            return props;
        },
    },
    watch: {
        value(val){
            this.selfValue = val === undefined || val === null ? '' : val;
        }
    },
    created(){
        this._tempValue = this.selfValue;
    },
    mounted() {
        this.$nextTick(() => {
            this.autoFocus && this.focus();
        });
    },
    methods: {
        select() {
            this.$refs.input.select();
        },
    }
}
</script>
