<style>
.collapse-transition {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>
<template>
<transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :appear="appear"
>
    <slot></slot>
</transition>
</template>
<script>
import { addClass, removeClass } from '../_util/dom';
import PropTypes from '../_util/vue-types';

export default {
    name: 'CollapseTransition',
    // functional: true,
    props: {
        transitionClass: PropTypes.string.def('collapse-transition'),
        appear: PropTypes.bool,
    },
    beforeDestroy(){
        this.dataset = null;
    },
    methods: {
        beforeEnter(el) {
            addClass(el, this.transitionClass);
            const { paddingTop, paddingBottom } = el.style;

            this.dataset = {
                paddingTop,
                paddingBottom,
            }

            el.style.height = '0';
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
            this.$emit('before-enter');
        },
        enter(el) {
            this.dataset.overflow = el.style.overflow;
            const { paddingTop, paddingBottom } = this.dataset;

            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px';
            } else {
                el.style.height = '';
            }
            el.style.paddingTop = paddingTop;
            el.style.paddingBottom = paddingBottom;

            el.style.overflow = 'hidden';
            this.$emit('enter');
        },
        afterEnter(el) {
            const { overflow } = this.dataset;
            // for safari: remove class then reset height is necessary
            removeClass(el, this.transitionClass);
            el.style.height = '';
            el.style.overflow = overflow;
            this.$emit('after-enter');
        },
        beforeLeave(el) {
            const { paddingTop, paddingBottom, overflow } = el.style;
            this.dataset = {
                paddingTop,
                paddingBottom,
                overflow,
            }

            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
            this.$emit('before-leave');
        },
        leave(el) {
            if (el.scrollHeight !== 0) {
                // for safari: add class after set height, or it will jump to zero height suddenly, weired
                addClass(el, this.transitionClass);
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
            this.$emit('leave');
        },
        afterLeave(el) {
            const { paddingTop, paddingBottom, overflow } = this.dataset;
            removeClass(el, this.transitionClass);
            el.style.height = '';
            el.style.overflow = overflow;
            el.style.paddingTop = paddingTop;
            el.style.paddingBottom = paddingBottom;
            this.$emit('after-leave');
        }
    },
};

</script>
