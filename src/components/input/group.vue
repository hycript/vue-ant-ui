<style lang="less" src="./style/index.less"></style>
<template>
<span :class="classes" v-on="$listeners">
    <slot></slot>
</span>
</template>
<script>
import PropTypes from '../_util/vue-types';

export default {
    name: 'InputGroup',
    props: {
        prefixCls: PropTypes.string.def('ant-input-group'),
        size: PropTypes.oneOf(['small', 'large', 'default']),
        compact: PropTypes.bool,
    },
    computed: {
        classes() {
            const { prefixCls, size, compact = false } = this;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-compact`]: compact,
            };
        },
    },
    methods: {
    }
}
</script>
