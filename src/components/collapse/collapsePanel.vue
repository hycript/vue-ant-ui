<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes">

</div>
</template>
<script>
import PropTypes from '../_util/vue-types';

export default {
    props: {
        prefixCls: PropTypes.string,
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        headerClass: PropTypes.string,
        showArrow: PropTypes.bool.def(true),
        destroyInactivePanel: PropTypes.bool.def(false),
        disabled: PropTypes.bool,
        accordion: PropTypes.bool,
        forceRender: PropTypes.bool.def(false),
        activeKey: PropTypes.array,
        // isActive: PropTypes.bool,
        // expandIcon: PropTypes.func,
    },
    computed: {
        slefKey(){
            return this.$vnode.key;
        },
        isActive(){
            const { activeKey, slefKey } = this;
            return activeKey.indexOf(slefKey) > -1;
        },
        classes(){
            const { prefixCls, isActive, disabled } = this;
            return {
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-active`]: isActive,
                [`${prefixCls}-item-disabled`]: disabled,
            }
        }
    },
    methods: {
        handleItemClick() {
            this.$emit('itemClick', this.slefKey);
        },
        handleKeyPress(e) {
            if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
                this.handleItemClick();
            }
        },
    }
}
</script>
