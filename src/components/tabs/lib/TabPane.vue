<style lang="less"></style>
<template>
<div :class="classes" role="tabpanel" :aria-hidden="active ? 'false' : 'true'">
    <slot></slot>
    <!-- <slot v-if="active"></slot>
    <slot v-else name="placeholder">
        {{ placeholder }}
    </slot> -->
</div>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'vTabPane',
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        active: PropTypes.bool,
        destroyInactiveTabPane: PropTypes.bool,
        forceRender: PropTypes.bool,
        tab: PropTypes.any,
        closable: PropTypes.bool,
        disabled: PropTypes.bool,
        placeholder: PropTypes.any,
    },
    computed: {
        classes(){
            const { active, prefixCls } = this;
            return {
                [`${prefixCls}-tabpane`]: true,
                [`${prefixCls}-inactive`]: !active,
                [`${prefixCls}-active`]: active,
            }
        },
    },
    methods: {
    }
}
</script>
