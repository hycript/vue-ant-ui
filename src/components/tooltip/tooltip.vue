<style lang="less">
@import './style/index.less';
.@{tooltip-prefix-cls} {
    &-wrapper {
        display: inline-block;
    }
}
</style>
<template>
<div :class="`${prefixCls}-wrapper`" @mouseenter="onMouseenter" @mouseleave="onMouseleave" @click="onClick" @contextmenu="onContextmenu">
    <!-- @focus="onFocus" @blur="onBlur" -->
    <slot :show="show" :hide="hide" :visible="selfVisible"></slot>
    <vTransition>
        <Align v-if="selfVisible" :target="getTarget" :align="selfPlacement" :monitorWindowResize="true" :style="originStyle" @align="onAlign">
            <Popup :getPopupContainer="getPopupContainer">
                <div v-on="$contentsListener" ref="contents" :class="classes">
                    <div :class="[`${prefixCls}-content`]">
                        <slot name="contents" :show="show" :hide="hide" :visible="selfVisible">
                            <div :class="[`${prefixCls}-arrow`]"></div>
                            <div :class="[`${prefixCls}-inner`, overlayClassName || '']" :style="overlayStyle">
                                <slot name="title">{{ title }}</slot>
                            </div>
                        </slot>
                    </div>
                </div>
            </Popup>
        </Align>
    </vTransition>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { contains } from '../_util/dom';
import abstractTooltipProps from './abstractTooltipProps.js';
import getPlacement from './getPlacement';
import Align from '../common/align.js';
import Popup from '../common/popup.js';
import vTransition from '../transition';
import listener from '../common/listener';

export default {
    name: 'Tooltip',
    mixins: [listener],
    components: {
        Align,
        Popup,
        vTransition,
    },
    model: {
        prop: 'visible',
    },
    data(){
        return {
            selfVisible: this.visible,
            realPlacement: '',
        }
    },
    props: {
        ...abstractTooltipProps,
        title: PropTypes.any,
    },
    computed: {
        selfPlacement(){
            const { placement, arrowPointAtCenter, autoAdjustOverflow } = this;
            return getPlacement({
                placement,
                arrowPointAtCenter,
                autoAdjustOverflow,
            })
        },
        selfTrigger(){
            const { trigger } = this;
            return [].concat(trigger);
        },
        classes(){
            const { prefixCls, placement, realPlacement } = this;

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-placement-${realPlacement || placement}`]: true,
            }
        },
        isNoTitle(){
            const { $slots, title } = this;
            return !$slots.title && !title;
        },
        originStyle(){
            let { selfPlacement, realPlacement: placement } = this;
            let originTop = '50%';
            let originLeft = '50%';
            placement = placement || this.placement;

            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                originTop = '100%';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                originTop = '0%'
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                originLeft = '100%';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                originLeft = '0%';
            }

            return {
                transformOrigin: `${originLeft} ${originTop}`
            };
        },
        $contentsListener(){
            const { $isServer } = this;
            if($isServer) return {};

            const isTouch = 'ontouchstart' in window ? true : false;
            const downEvent = isTouch ? 'touchstart' : 'mousedown';
            return {
                mouseenter: (e) => {
                    e.stopPropagation();
                    this.onMouseenter(e)
                },
                mouseleave: (e) => {
                    e.stopPropagation();
                    this.onMouseleave(e)
                },
                [downEvent]: (e) => {
                    e.stopPropagation();
                },
            }
        }
    },
    watch: {
        visible(val){
            this.selfVisible = val;
        },
        selfVisible(val){
            !!val ? this.registOutsideHandler() : this.clearOutsideHandler();
            this.$emit('visibleChange', val);
        },
        selfTrigger(val){
            if(this.selfVisible){
                this.clearOutsideHandler();
                this.registOutsideHandler();
            }
        }
    },
    created(){
        this.delayTimer = null;
    },
    methods: {
        getTarget(){
            return this.$el;
        },
        clearTimer(){
            if(!!this.delayTimer){
                clearTimeout(this.delayTimer);
                this.delayTimer = null;
            }
        },
        onMouseenter(e){
            const { selfTrigger } = this;
            if(selfTrigger.indexOf('hover') === -1) return;

            const { mouseEnterDelay: delay } = this;
            this.show(e, delay);
        },
        onMouseleave(e){
            const { selfTrigger } = this;
            if(selfTrigger.indexOf('hover') === -1) return;

            const { mouseLeaveDelay: delay } = this;
            this.hide(e, delay);
        },
        onClick(e){
            const { selfTrigger, selfVisible } = this;
            if(selfTrigger.indexOf('click') === -1) return;

            const { type, target: node } = event;
            if(!this.$refs.contents || !contains(this.$refs.contents, node)){
                !selfVisible ? this.show(e) : this.hide(e);
            }
        },
        onFocus(e){
            const { selfTrigger } = this;
            if(selfTrigger.indexOf('focus') === -1) return;

            this.show(e);
        },
        onBlur(e){
            const { selfTrigger } = this;
            if(selfTrigger.indexOf('focus') === -1) return;

            this.hide(e);
        },
        onContextmenu(e){
            const { selfTrigger } = this;
            if(selfTrigger.indexOf('contextmenu') === -1) return;
            e.preventDefault();
            this.show(e);
        },
        onAlign(source, domAlign){
            this.realPlacement = getPlacement.check(domAlign.points);
            // console.log('onAlign', this.realPlacement);
        },
        toggle(){
            this.selfVisible ? this.hide() : this.show();
        },
        show(event, delay){
            this.clearTimer();
            if(this.selfVisible === true) return;

            if(!delay){
                this.setVisible(true);
            }else{
                this.delayTimer = setTimeout(_ => {
                    this.setVisible(true);
                }, delay * 1000);
            }
        },
        setVisible(value){
            this.selfVisible = value;
            this.$emit('input', value);
        },
        hide(event, delay){
            this.clearTimer();
            if(this.selfVisible === false) return;

            if(!delay){
                this.setVisible(false);
            }else{
                this.delayTimer = setTimeout(_ => {
                    this.setVisible(false);
                }, delay * 1000);
            }
        },
        registOutsideHandler(){
            if(this._listeners.length > 0) return;
            const isTouch = 'ontouchstart' in window ? true : false;
            const downEvent = isTouch ? 'touchstart' : 'mousedown';
            this.registListener(window.document, downEvent, this.outsideHandler);
            if(this.selfTrigger.indexOf('contextmenu') > -1){
                this.registListener(window.document, 'scroll', this.outsideHandler);
                this.registListener(window, 'blur', this.outsideHandler);
            }
        },
        outsideHandler(event){
            const { type, target: node } = event;
            if(!contains(this.$el, node)){
                this.hide();
            }
        },
        clearOutsideHandler(){
            this.clearListener();
        }
    }
}
</script>
