<style lang="less" src="./style/index.less"></style>
<template>
<AddonWrapper v-if="type !== 'textarea'" v-bind="$props">
    <template slot="addonBefore"><slot name="addonBefore"></slot></template>
    <AffixWrapper v-bind="$props">
        <template slot="prefix"><slot name="prefix"></slot></template>
        <template slot="suffix"><slot name="suffix"></slot></template>
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
import { is, hasProp } from '../_util/props-util';
import inputProps from './inputProps';
import inputMixin from './inputMixin';
import AddonWrapper from './lib/addonWrapper';
import AffixWrapper from './lib/affixWrapper';

export default {
    name: 'Input',
    mixins: [inputMixin],
    inheritAttrs: false,
    components: {
        AddonWrapper,
        AffixWrapper,
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
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-disabled`]: disabled,
            };
        },
        inputProps(){
            const { type } = this;
            if(type === 'textarea') return {};
            const props = omit(this.$props, ['prefixCls', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'value', 'defaultValue']);
            return props;
        }
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
