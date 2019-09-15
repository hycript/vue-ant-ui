<style lang="less"></style>
<template>
<div :class="classes" :style="styles" :key="`inkBar-${tabPosition}`"></div>
</template>
<script>
import PropTypes from '../../_util/vue-types';
import isTransformSupported from '../../_util/isTransformSupported';

const TransformSupported = isTransformSupported();

export default {
    name: 'InkTabBarNode',
    data(){
        return {
            inited: false,
        }
    },
    props: {
        inkBarAnimated: PropTypes.bool.def(true),
        prefixCls: PropTypes.string,
        // styles: PropTypes.object,
        tabPosition: PropTypes.string,
        panels: PropTypes.array,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        activeIndex: PropTypes.number,
        isVertical: PropTypes.bool,
    },
    computed: {
        classes(){
            const { prefixCls, inkBarAnimated } = this;
            const className = `${prefixCls}-ink-bar`;
            return {
                [className]: true,
                [inkBarAnimated ? `${className}-animated` : `${className}-no-animated`]: true,
            };
        },
        styles(){
            const { prefixCls, isVertical, activeIndex } = this;
            if(this.$isServer || !this.inited || activeIndex === -1) return { display: 'none' };
            const { $el, $refs } = this.$parent;
            const $nav = $refs['nav'];
            const $active = $el.querySelector(`.${prefixCls}-tab-active`);

            const navRect = $nav.getBoundingClientRect();
            const activeRect = $active.getBoundingClientRect();

            if(!isVertical){
                // let left = getLeft($active, $nav);
                const left = activeRect.x - navRect.x;
                const width = $active.offsetWidth;
                return {
                    [TransformSupported ? 'transform' : 'left']: TransformSupported ? `translate3d(${left}px, 0, 0)` : `${left}px`,
                    width: `${width}px`,
                }
            }else{
                const top = activeRect.y - navRect.y;
                const height = $active.offsetHeight;
                return {
                    [TransformSupported ? 'transform' : 'top']: TransformSupported ? `translate3d(0, ${top}px, 0)` : `${top}px`,
                    height: `${height}px`,
                }
            }
        }
    },
    mounted(){
        this.$nextTick(_ => {
            this.inited = true;
        });
    },
}
</script>
