<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-grid`" v-on="$listeners">
    <slot></slot>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';

export default {
    name: 'CardGrid',
    props: {
        prefixCls: PropTypes.string.def('ant-card'),
    }
}
</script>
