<style lang="less" src="./style/index.less"></style>
<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import PropTypes from '~utils/vue-types';

let enquire;
if (typeof window !== 'undefined') {
    const matchMediaPolyfill = (mediaQuery) => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
            },
            removeListener() {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = require('enquire.js');
}

const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
}

const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const BreakpointMap = PropTypes.shape({
    xs: stringOrNumber,
    sm: stringOrNumber,
    md: stringOrNumber,
    lg: stringOrNumber,
    xl: stringOrNumber,
    xxl: stringOrNumber,
}).loose;

export default {
    name: 'Row',
    data(){
        return {
            screens: {}
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-row'),
        type: PropTypes.oneOf(['flex']),
        align: PropTypes.oneOf(['top', 'middle', 'bottom']),
        justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
        gutter: PropTypes.oneOfType([PropTypes.number, BreakpointMap]).def(0),
    },
    computed: {
        classes(){
            const { prefixCls, type, align, justify } = this;

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${type}-${align}`]: type && align,
                [`${prefixCls}-${type}-${justify}`]: type && justify,
            }
        },
        gutterValue(){
            const { gutter } = this
            if (typeof gutter === 'object') {
                for (let i = 0; i <= responsiveArray.length; i++) {
                    const breakpoint = responsiveArray[i]
                    if (this.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                        return gutter[breakpoint];
                    }
                }
            }
            return gutter;
        },
        styles(){
            const { gutterValue } = this;
            return gutterValue > 0 ? {
                marginLeft: `${gutterValue / -2}px`,
                marginRight: `${gutterValue / -2}px`,
            } : {}
        }
    },
    beforeUpdate(){
        this.updateSlotGutter();
    },
    mounted(){
        const mapper = {};

        Object.keys(responsiveMap)
        .map((screen) => enquire.register(responsiveMap[screen],
            {
                match: () => {
                    if (typeof this.gutter !== 'object') {
                        return;
                    }
                    this.screens = {
                        ...this.screens,
                        [screen]: true,
                    }
                },
                unmatch: () => {
                    if (typeof this.gutter !== 'object') {
                        return;
                    }
                    this.screens = {
                        ...this.screens,
                        [screen]: false,
                    }
                },
                // Keep a empty destory to avoid triggering unmatch when unregister
                destroy() {},
            }
        ));

        this.updateSlotGutter();
    },
    beforeDestroy () {
        Object.keys(responsiveMap).map((screen) => enquire.unregister(responsiveMap[screen]));
    },
    methods: {
        updateSlotGutter(){
            const { gutterValue } = this;
            this.$children.forEach($child => {
                $child.gutter = gutterValue;
            })
        }
    }
}
</script>
