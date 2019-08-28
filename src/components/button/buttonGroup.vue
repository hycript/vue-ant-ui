<style lang="less" src="./style/index.less"></style>
<style lang="less">
@import "../style/themes/default.less";

.@{ant-prefix}-btn-group{
    font-size: 0;
}
</style>
<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import PropTypes from '~utils/vue-types';

import ButtonSize from './buttonSize.js';
import ButtonSizeMapper from './buttonSizeMapper.js';

export default {
    name: 'ButtonGroup',
    props: {
        prefixCls: PropTypes.string.def('ant-btn-group'),
        size: ButtonSize,
    },
    computed: {
        classes(){
            const { prefixCls, size } = this;
            const sizeCls = ButtonSizeMapper(size);

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${sizeCls}`]: sizeCls,
            }
        },
    },
}
</script>
