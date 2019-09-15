<style lang="less"></style>
<template>
<div :class="classes" role="tabpanel" :aria-hidden="active ? 'false' : 'true'">
    <slot v-if="shouldRender"></slot>
    <slot v-else name="placeholder">
        {{ placeholder }}
    </slot>
</div>
</template>
<script>
import PropTypes from '../../_util/vue-types';

export default {
    name: 'TabPane',
    data(){
        return {
            hasActived: false,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tabs'),
        active: PropTypes.bool,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        destroyInactiveTabPane: PropTypes.bool,
        forceRender: PropTypes.bool,
        tab: PropTypes.any,
        icon: PropTypes.string,
        closable: PropTypes.bool,
        disabled: PropTypes.bool,
        placeholder: PropTypes.any,
    },
    computed: {
        classes(){
            let { active, prefixCls } = this;
            prefixCls = `${prefixCls}-tabpane`;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-inactive`]: !active,
                [`${prefixCls}-active`]: active,
            }
        },
        slefKey(){
            return this.$vnode.key;
        },
        /* slefActive(){
            return this.activeKey === this.slefKey;
        }, */
        shouldRender(){
            const { destroyInactiveTabPane, active, hasActived, forceRender } = this;
            const isRender = destroyInactiveTabPane ? active : hasActived;
            return isRender || forceRender;
        },
    },
    watch: {
        active: {
            handler(val){
                if(val) this.hasActived = true;
            },
            immediate: true,
        }
    },
    mounted(){
    },
    methods: {
    }
}
</script>
