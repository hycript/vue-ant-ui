<style lang="less" src="./style/index.less"></style>
<template>
<vInput ref="input"
    :class="[prefixCls, enterButton || $slots.enterButton ? `${prefixCls}-enter-button` : '', size ? `${prefixCls}-${size}` : '']"
    v-on="$$listeners" v-bind="inputProps" @pressEnter="onPressEnter"
>
    <template slot="addonBefore"><slot name="addonBefore"></slot></template>
    <template slot="addonAfter"><slot name="addonAfter"></slot></template>
    <template slot="prefix"><slot name="prefix"></slot></template>
    <template slot="suffix">
        <slot name="suffix"></slot>
        <!-- <slot v-if="$slots.enterButton" name="enterButton"></slot> -->
        <vnode @click="onSearch">
            <vnode v-if="$slots.enterButton" :class="`${prefixCls}-button`" :size="size">
                <slot name="enterButton"></slot>
            </vnode>
            <Button v-else-if="enterButton" :class="`${prefixCls}-button`" type="primary" :size="size" :disabled="disabled" key="enterButton">
                <Icon v-if="enterButton === true" type="search" />
                <template v-else>{{ enterButton }}</template>
            </Button>
            <Icon v-else :class="`${prefixCls}-icon`" type="search" key="searchIcon" />
        </vnode>
    </template>
</vInput>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp } from '../_util/props-util';
import { omit } from '../_util/lodash';
import events from '../common/events';
import vnode from '../common/vnode';
import inputProps from './inputProps';
import vInput from './input';
import Button from '../button';
import Icon from '../icon';

export default {
    name: 'InputSearch',
    mixins: [events],
    exceptListeners: ['search', 'pressEnter'],
    components: {
        vnode,
        vInput,
        Button,
        Icon,
    },
    inheritAttrs: false,
    data(){
        return {
        }
    },
    props: {
        ...inputProps,
        prefixCls: PropTypes.string.def('ant-input-search'),
        inputPrefixCls: PropTypes.string.def('ant-input'),
        enterButton: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.object]),
    },
    computed: {
        inputProps() {
            const props = omit(this.$props, ['prefixCls', 'inputPrefixCls']);
            if(!hasProp(this, 'value')){
                delete props.value;
            }
            props.prefixCls = this.inputPrefixCls;
            return props;
        }
    },
    methods: {
        onSearch(e){
            console.log('this.$refs.input.selfValue', this.$refs.input.selfValue);
            this.$emit('search', this.$refs.input.selfValue, e);
            this.$refs.input.focus();
        },
        onPressEnter(e){
            this.$emit('pressEnter', e);
            this.onSearch(e);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
    }
}
</script>
