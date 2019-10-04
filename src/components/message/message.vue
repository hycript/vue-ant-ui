<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes">
    <vnode v-if="icon" :vnodes="icon"></vnode>
    <Icon v-else :type="iconType" /> <!--  :theme="iconType === 'loading' ? 'outlined' : 'filled'" -->
    <span>
        <vnode :vnodes="content"></vnode>
    </span>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Icon from '../icon';
import vnode from '../common/vnode';

const IconType = {
    info: 'info-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
}

export default {
    name: 'Message',
    components: {
        Icon,
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-message'),
        type: PropTypes.oneOf(['success', 'info', 'warning', 'error', 'loading']),
        content: PropTypes.any,
        icon: PropTypes.any,
    },
    computed: {
        classes(){
            const { prefixCls, type } = this;
            return {
                [`${prefixCls}-custom-content`]: true,
                [`${prefixCls}-${type}`]: !!type,
            }
        },
        iconType(){
            const { type } = this;
            return IconType[type] || IconType['info'];
        }
    },
}
</script>
