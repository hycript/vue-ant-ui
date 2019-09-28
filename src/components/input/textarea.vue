<style lang="less" src="./style/index.less"></style>
<template>
<textarea ref="input" :class="textareaClasses" :style="textareaStyles"
    v-bind="textareaProps" :value="selfValue"
    v-on="$$listeners" @keydown="handleKeydown" @input="handleChange"
    @compositionstart="handleCompositionStart" @compositionend="handleCompositionEnd"
></textarea>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { omit } from '../_util/lodash';
import { is, hasProp } from '../_util/props-util';
import events from '../common/events';
import inputProps from './inputProps';
import inputMixin from './inputMixin';

export default {
    name: 'Textarea',
    mixins: [inputMixin],
    model: {
        prop: 'value',
    },
    data(){
        const { value, defaultValue } = this;
        return {
            selfValue: (hasProp(this, 'value') ? value : defaultValue) || '',
            textareaStyles: '',
        }
    },
    props: {
        ...omit(inputProps, ['addonBefore', 'addonAfter', 'prefix', 'suffix']),
        autosize: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    },
    computed: {
        textareaClasses(){
            const { prefixCls, disabled } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-disabled`]: disabled,
            };
        },
        textareaProps(){
            const { type } = this;
            if(type === 'textarea') return {};
            const props = omit(this.$props, ['prefixCls', 'value', 'defaultValue', 'type', 'autosize']);
            return props;
        },
    },
    watch: {
        value(val){
            this.selfValue = val === undefined || val === null || isNaN(val) || isFinite(val) ? '' : val;
        },
        selfValue() {
            this.$nextTick(this.resizeTextarea);
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.autoFocus && this.focus();
        });
        setTimeout(this.resizeTextarea, 0);
    },
    methods: {
        resizeTextarea(){
            const { autosize } = this;
            if(!autosize || !this.$refs.input) {
                this.textareaStyles = '';
                return;
            }
            let node = this.$refs.input;
            const style = window.getComputedStyle(node);
            const boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing') || 'content-box';
            const include = boxSizing !== 'content-box';
            const cssText = getStyleString(style, SIZING_STYLE) + ';' + HIDDEN_TEXTAREA_STYLE;

            node = node.cloneNode();
            node.style.cssText = cssText;
            document.body.appendChild(node);

            this.$nextTick(() => {
                this.calcTextarea(node, include);
                node = undefined;
            })
        },
        calcTextarea(node, include){
            const { autosize } = this;
            const style = window.getComputedStyle(node);

            let padding = calcStyleOffset(style, ['padding-top', 'padding-bottom']);
            let border = calcStyleOffset(style, ['border-top-width', 'border-bottom-width']);
            let line = calcStyleOffset(style, ['line-height']);
            let { offsetHeight, scrollHeight } = node;
            let height = include ? scrollHeight + border : scrollHeight - padding;

            if(typeof autosize === 'boolean'){
                this.textareaStyles = { height: `${height}px`, 'overflow-y': 'hidden' };
                document.body.removeChild(node);
                return;
            }

            const { minRows, maxRows } = autosize;
            const min = minRows ? minRows * line + (include ? padding + border : 0) : 0;
            const max = maxRows ? maxRows * line + (include ? padding + border : 0) : 0;
            let _h = height;
            height = height < min ? min : max > 0 && height > max ? max : height;
            this.textareaStyles = { height: `${height}px`, 'overflow-y': height < _h ? '' : 'hidden' };
            document.body.removeChild(node);
        }
    }
}

const SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'white-space',
    'word-break',
    'word-wrap',
    'word-spacing',
    'text-wrap',
]

const HIDDEN_TEXTAREA_STYLE = `
    min-height:0 !important;
    max-height:none !important;
    height:0 !important;
    visibility:hidden !important;
    overflow:hidden !important;
    position:absolute !important;
    z-index:-1000 !important;
    left:-10000px !important;
    top:-10000px !important;
`;

function calcStyleOffset(style, items, multi = false){
    let result = [];
    if(!items || items.length === 0) return;
    items.forEach(key => {
        result.push(parseFloat(style.getPropertyValue(key)));
    });
    if(result.length === 1) return result[0];
    return result.reduce((sum, val) => {
        return multi ? sum * val : sum + val;
    }, multi ? 1 : 0);
}

function getStyleString(style, items){
    return items.map(name => `${name}:${style.getPropertyValue(name)}`).join(';');
}
</script>
