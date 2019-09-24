<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes">
    <div class="`${prefixCls}-content-box`">
        <slot></slot>
    </div>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';

export default {
    name: 'CollapsePanelContent',
    data(){
        return {
            selfIsActive: undefined,
        };
    },
    props: {
        prefixCls: PropTypes.string,
        isActive: PropTypes.bool,
        destroyInactivePanel: PropTypes.bool,
        forceRender: PropTypes.bool,
        role: PropTypes.any,
    },
    computed: {
        classes(){
            const { prefixCls, isActive } = this;
            return {
                [`${prefixCls}-content`]: true,
                [`${prefixCls}-content-active`]: isActive,
            }
        }
    }
}
</script>
