<style lang="less" src="../style/index.less"></style>
<template>
<transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :enter-active-class="enterActiveCls"
    :leave-active-class="leaveActiveCls"
    appear
>
    <slot></slot>
</transition>
</template>
<script>
import PropTypes from '~utils/vue-types';

const defaultTransitionName = 'zoom-big-fast';

export default {
    name: 'vTransition',
    props: {
        transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).def(defaultTransitionName),
    },
    computed: {
        enterActiveCls(){
            let { transitionName } = this;

            if(Array.isArray(transitionName)){
                if(transitionName[0]){
                    return transitionName[0];
                }else{
                    transitionName = defaultTransitionName;
                }
            }

            return `${transitionName}-enter ${transitionName}-enter-active`;
        },
        leaveActiveCls(){
            let { transitionName } = this;

            if(Array.isArray(transitionName)){
                if(transitionName[1]){
                    return transitionName[1];
                }else{
                    transitionName = defaultTransitionName;
                }
            }

            return `${transitionName}-leave ${transitionName}-leave-active`;
        }
    },
    methods: {
        beforeEnter(el){
            this.emit(el, 'before-enter');
        },
        enter(el){
            this.emit(el, 'enter');
        },
        afterEnter(el){
            this.emit(el, 'after-enter');
        },
        beforeLeave(el){
            this.emit(el, 'before-leave');
        },
        leave(el){
            this.emit(el, 'leave');
        },
        afterLeave(el){
            this.emit(el, 'after-leave');
        },
        emit(el, event){
            let child = this.$children.filter(child => {
                return child.$el === el;
            })[0];
            child && child.$emit(event);
            child = null;
            this.$emit(event);
        },
    }
}
</script>
