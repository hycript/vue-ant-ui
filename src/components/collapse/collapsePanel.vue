<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" role="tablist">
    <div :class="headerClasses" :role="accordion ? 'tab' : 'button'"
        @click="handleItemClick" @keypress="handleKeyPress"
        :tabIndex="disabled ? -1 : 0" :aria-expanded="isActive"
    >
        <Icon v-if="showArrow" type="right" class="arrow" />
        <slot name="header" :isActive="isActive">{{ header }}</slot>
    </div>
    <CollapseTransition :transitionClass="`${this.prefixCls}-anim-active`" @aaa="handleItemClick">
        <div ref="content" v-show="isShow" :class="contentClasses">
            <div v-if="shouldRender" :class="`${prefixCls}-content-box`">
                <slot></slot>
            </div>
        </div>
    </CollapseTransition>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Icon from '../icon';
import CollapseTransition from '../transition/collapseTransition';

export default {
    name: 'CollapsePanel',
    components: {
        Icon,
        CollapseTransition,
    },
    data(){
        return {
            hasActived: false,
            isShow: undefined,
        }
    },
    props: {
        prefixCls: PropTypes.string,
        header: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        headerClass: PropTypes.string,
        showArrow: PropTypes.bool.def(true),
        destroyInactivePanel: PropTypes.bool.def(false),
        disabled: PropTypes.bool,
        accordion: PropTypes.bool,
        forceRender: PropTypes.bool.def(false),
        activeKey: PropTypes.array,
        expandIcon: PropTypes.any,
    },
    computed: {
        selfKey(){
            return this.$vnode.key;
        },
        isActive(){
            const { activeKey, selfKey } = this;
            return activeKey && activeKey.indexOf(selfKey) > -1;
        },
        classes(){
            const { prefixCls, isActive, disabled, showArrow } = this;
            return {
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-active`]: isActive,
                [`${prefixCls}-item-disabled`]: disabled,
                [`${prefixCls}-no-arrow`]: !showArrow,
            }
        },
        headerClasses(){
            const { prefixCls, headerClass } = this;
            return [`${prefixCls}-header`, headerClass];
        },
        contentClasses(){
            const { prefixCls, isActive } = this;
            return {
                [`${prefixCls}-content`]: true,
                [`${prefixCls}-content-active`]: isActive,
            }
        },
        shouldRender(){
            const { destroyInactivePanel, isActive, hasActived, forceRender } = this;
            const isRender = destroyInactivePanel ? isActive : hasActived;
            return isRender || forceRender;
        }
    },
    watch: {
        isActive: {
            handler(val){
                if(val) this.hasActived = true;
                if(this.isShow === undefined){
                    this.isShow = val;
                }else{
                    this.$nextTick(() => {
                        this.isShow = val;
                    })
                }
            },
            immediate: true,
        }
    },
    methods: {
        handleItemClick() {
            if(this.disabled) return;
            this.$emit('itemClick', this.selfKey);
        },
        handleKeyPress(e) {
            if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
                this.handleItemClick();
            }
        },
    }
}
</script>
