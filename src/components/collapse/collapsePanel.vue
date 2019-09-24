<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" role="tablist">
    <div :class="headerClasses" :role="accordion ? 'tab' : 'button'"
        @click="handleItemClick" @keypress="handleKeyPress"
        :tabIndex="disabled ? -1 : 0" :aria-expanded="isActive"
    >
        <Icon v-if="showArrow" type="right" class="arrow" />
        <slot name="header">{{ header }}</slot>
    </div>
    <!-- :enter-active-class="`${prefixCls}-anim-active`"
        :leave-active-class="`${prefixCls}-anim-active`" -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <div ref="content" v-show="isActive" :class="contentClasses">
            <div v-if="shouldRender" :class="`${prefixCls}-content-box`">
                <slot></slot>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Icon from '../icon';

export default {
    name: 'CollapsePanel',
    components: {
        Icon,
    },
    data(){
        return {
            hasActived: false,
        }
    },
    props: {
        prefixCls: PropTypes.string,
        // key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
        selfKey(){
            return this.$vnode.key;
        },
        isActive(){
            const { activeKey, selfKey } = this;
            return activeKey.indexOf(selfKey) > -1;
        },
        classes(){
            const { prefixCls, isActive, disabled } = this;
            return {
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-active`]: isActive,
                [`${prefixCls}-item-disabled`]: disabled,
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
        beforeEnter(){
            const node = this.$refs.content;
            this.offsetHeight = node.offsetHeight;
            console.log('this.offsetHeight', this.offsetHeight);
            // node.style.height = 0;
        },
        enter(){
            const node = this.$refs.content;
            this.offsetHeight = node.offsetHeight;
            console.log('this.offsetHeight', this.offsetHeight);
            node.style.height = 0;
            setTimeout(_ => {
                node.classList.add(`${this.prefixCls}-anim-active`);
                node.style.height = `${this.offsetHeight}px`;
            })
            // node.style.height = `${this.offsetHeight}px`;
        },
        afterEnter(){
            const node = this.$refs.content;
            node.classList.remove(`${this.prefixCls}-anim-active`);
            node.style.height = '';
        },
        beforeLeave(){
            const node = this.$refs.content;
            node.style.height = `${node.offsetHeight}px`;
        },
        leave(){
            const node = this.$refs.content;
            setTimeout(_ => {
                node.classList.add(`${this.prefixCls}-anim-active`);
                node.style.height = 0;
            })
        },
        afterLeave(){
            console.error('after leave')
            const node = this.$refs.content;
            node.classList.remove(`${this.prefixCls}-anim-active`);
            node.style.height = '';
        }
    }
}
</script>
