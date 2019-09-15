<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes">
    <slot></slot>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';

export default {
    props: {
        prefixCls: PropTypes.string,
        hasSider: PropTypes.bool,
    },
    computed: {
        classes(){
            const { prefixCls } = this;
            return {
                [prefixCls]: true,
            }
        },
    }
}
</script>
