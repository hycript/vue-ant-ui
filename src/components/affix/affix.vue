<style lang="less" src="./style/index.less"></style>
<template>
    <div :style="placeholderStyle" ref="placeholderNode">
        <div :class="classes" ref="fixedNode" :style="affixStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { isEqual, isFunction } from '~utils/lodash';
import getScroll from '~utils/getScroll';
import PropTypes from '~utils/vue-types';

const EVENTS = [
    'resize',
    'scroll',
    // 'touchstart',
    // 'touchmove',
    // 'touchend',
    'pageshow',
    'load',
];

export default {
    name: 'Affix',
    data(){
        return {
            affixStyle: undefined,
            placeholderStyle: undefined,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-affix'),
        offsetTop: PropTypes.number,
        offset: PropTypes.number,
        offsetBottom: PropTypes.number,
        target: PropTypes.func,
    },
    computed: {
        classes(){
            const { prefixCls, affixStyle } = this;
            return {
                [`${prefixCls}`]: affixStyle,
            }
        },
        isWindow() {
            const target = this.target || this.getDefaultTarget;
            return target() === window;
        },
        targetOffsetTop() {
            const target = this.target || this.getDefaultTarget;
            return this.getTop(target());
        },
    },
    mounted () {
        const target = this.target || this.getDefaultTarget;
        // Wait for parent component ref has its value
        this.timeout = setTimeout(() => {
            this.setTargetEventListeners(target)
        })
    },
    watch: {
        target (val) {
            this.$nextTick(() => {
                this.clearEventListeners()
                this.setTargetEventListeners(val)
                // Mock Event object.
                this.updatePosition()
            })
        },
    },
    beforeDestroy () {
        const target = this.target || this.getDefaultTarget;
        this.clearEventListeners(target)
        clearTimeout(this.timeout)
        // this.updatePosition.cancel()
    },
    methods: {
        getDefaultTarget() {
            return typeof window !== 'undefined' ? window : null;
        },
        getTargetRect(target) {
            return (target && target !== window) ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
        },
        getOffset(element, target) {
            const elemRect = element.getBoundingClientRect();
            const targetRect = this.getTargetRect(target);

            const scrollTop = getScroll(target, true);
            const scrollLeft = getScroll(target, false);

            const docElem = window.document.body;
            const clientTop = docElem.clientTop || 0;
            const clientLeft = docElem.clientLeft || 0;

            return {
                top: elemRect.top - targetRect.top + scrollTop - clientTop,
                left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
                width: elemRect.width,
                height: elemRect.height,
            };
        },
        setAffixStyle(e, affixStyle = {}) {
            const { target = this.getDefaultTarget } = this;
            const originalAffixStyle = this.affixStyle;
            // const isWindow = target() === window;
            if (e.type === 'scroll' && originalAffixStyle && affixStyle && this.isWindow) {
                return;
            }
            if (isEqual(affixStyle, originalAffixStyle)) {
                return;
            }
            this.affixStyle = affixStyle;
            const affixed = !!this.affixStyle;
            if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
                this.$emit('change', affixed);
            }
        },
        setPlaceholderStyle(placeholderStyle = {}) {
            const originalPlaceholderStyle = this.placeholderStyle;
            if (isEqual(placeholderStyle, originalPlaceholderStyle)) {
                return;
            }
            this.placeholderStyle = placeholderStyle;
        },
        syncPlaceholderStyle(e) {
            const { affixStyle } = this;
            if (!affixStyle) {
                return;
            }
            const placeholderNode = this.$refs['placeholderNode'];
            placeholderNode.style.cssText = '';
            this.setAffixStyle(e, {
                ...affixStyle,
                width: placeholderNode.offsetWidth + 'px',
            });
            this.setPlaceholderStyle({
                width: placeholderNode.offsetWidth + 'px',
            });
        },
        updatePosition(e = {}) {
            let { offsetTop, offsetBottom, offset, target = this.getDefaultTarget } = this;
            const targetNode = target();

            // Backwards support
            // Fix: if offsetTop === 0, it will get undefined,
            //   if offsetBottom is type of number, offsetMode will be { top: false, ... }
            offsetTop = typeof offsetTop === 'undefined' ? offset : offsetTop;
            const scrollTop = getScroll(targetNode, true);
            const affixNode = this.$refs.placeholderNode;
            const elemOffset = this.getOffset(affixNode, targetNode);
            const fixedNode = this.$refs['fixedNode'];
            const elemSize = {
                width: fixedNode.offsetWidth,
                height: fixedNode.offsetHeight,
            };

            const offsetMode = {
                top: false,
                bottom: false,
            };
            // Default to `offsetTop=0`.
            if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
                offsetMode.top = true;
                offsetTop = 0;
            } else {
                offsetMode.top = typeof offsetTop === 'number';
                offsetMode.bottom = typeof offsetBottom === 'number';
            }

            const targetRect = this.getTargetRect(targetNode);
            const targetInnerHeight =
            targetNode.innerHeight || targetNode.clientHeight;
            if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
                // Fixed Top
                const width = `${elemOffset.width}px`;
                const height = `${elemSize.height}px`;
                const top = `${targetRect.top + offsetTop}px`;
                const left = `${targetRect.left + elemOffset.left}px`;
                const affixStyle = {
                    position: 'fixed',
                    top,
                    left,
                    width,
                };
                this.setAffixStyle(e, affixStyle);
                this.setPlaceholderStyle({
                    width,
                    height,
                });
            } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
                // Fixed Bottom
                const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
                const width = elemOffset.width;
                const height = `${elemOffset.height}px`;
                const bottom = `${targetBottomOffet + offsetBottom}px`;
                const left = `${targetRect.left + elemOffset.left}px`;
                const affixStyle = {
                    position: 'fixed',
                    bottom,
                    left,
                    width,
                };
                this.setAffixStyle(e, affixStyle);
                this.setPlaceholderStyle({
                    width,
                    height,
                });
            } else {
                const { affixStyle } = this;
                if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                    this.setAffixStyle(e, { ...affixStyle, width: affixNode.offsetWidth });
                } else {
                    this.setAffixStyle(e, null);
                }
                this.setPlaceholderStyle(null);
            }

            if (e.type === 'resize') {
                this.syncPlaceholderStyle(e);
            }
        },
        getTop(el) {
            let top = el.offsetTop;
            let currentParent = el.offsetParent;
            while (currentParent != null) {
                top += currentParent.offsetTop;
                currentParent = currentParent.offsetParent;
            }
            return top;
        },
        handleTagetNotWindow() {
            const temp = this.affixStyle;
            let { offsetTop, offsetBottom, offset, target = this.getDefaultTarget } = this;
            if(temp) {
                const targetNode = target();
                temp['position'] = 'absolute';
                const targetOffsetTop = this.targetOffsetTop;
                if(!temp['bottom']) {
                    offsetTop = typeof offsetTop === 'undefined' ? (offset ? offset : 0) : offsetTop;
                    temp['top'] = `${offsetTop + targetOffsetTop}px`;
                } else {
                    offsetBottom = typeof offsetBottom === 'undefined' ? (offset ? offset : 0) : offsetBottom;
                    const rect = targetNode.getBoundingClientRect();
                    const { height } = this.placeholderStyle;
                    const h = height.replace('px', '');
                    temp['top'] = `${targetOffsetTop + rect.height - offsetBottom - h}px`;
                    temp['bottom'] = undefined;
                }
            }
            this.affixStyle = temp;
        },
        setTargetEventListeners (getTarget) {
            const target = getTarget();
            if (!target) {
                return;
            }
            this.clearEventListeners(getTarget)

            EVENTS.forEach(eventName => {
                target.addEventListener(eventName, this.updatePosition)
            });
            if(!this.isWindow) {
                window.addEventListener('scroll', this.handleTagetNotWindow);
            }
        },
        clearEventListeners (getTarget) {
            const target = getTarget();
            if (!target) {
                return;
            }
            EVENTS.forEach(eventName => {
                target.removeEventListener(eventName, this.updatePosition);
            });
            if(!this.isWindow) {
                window.removeEventListener('scroll', this.handleTagetNotWindow);
            }
        },
    }
}
</script>
