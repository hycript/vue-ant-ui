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
import PropTypes from '~utils/vue-types';

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
        slefKey(){
            return this.$vnode.key;
        },
        slefActive(){
            return this.activeKey === this.slefKey;
        },
        shouldRender(){
            const { destroyInactiveTabPane, selfActive, hasActived, forceRender } = this;
            const isRender = destroyInactiveTabPane ? selfActive : hasActived;
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
        console.error('tabPabe', this);
    },
    methods: {
    }
}
</script>
