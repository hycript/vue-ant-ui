<style lang="less" src="./style/index.less"></style>
<template>
    <div></div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import inputProps from './inputProps';
import INPUT from './const';

export default {
    name: 'Input',
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: INPUT.CHANGE,
    },
    data(){
        const { value, defaultValue } = this;
        return {
            selfValue: (hasProp(this, 'value') ? value : defaultValue) || '',
        }
    },
    props: {
        ...inputProps,
        prefixCls: PropTypes.string.def('ant-input'),
    },
    computed: {
        classes(){
            const { prefixCls } = this;

            return {
                [`${prefixCls}`]: true,
            }
        },
    },
    watch: {
        value(val){
            this.selfValue = val;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.autoFocus && this.focus();
        });
    },
    methods: {
        handleKeyDown(e) {
            if (e.keyCode === 13) {
                this.$emit('pressEnter', e);
            }
            this.$emit('keydown', e);
        },
        handleChange(e){

        },
        focus(){
            this.$refs.input.focus();
        },
        blur(){
            this.$refs.input.blur();
        },
        select() {
            this.$refs.input.select();
        },
    }
}
</script>
