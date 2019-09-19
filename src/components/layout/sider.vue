<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" :style="styles">
    <div :class="`${prefixCls}-children`">
        <slot :collapsed="selfCollapsed" :toggle="toggle"></slot>
    </div>
    <template v-if="(!!collapsible || (this.below && hasZeroWidthTrigger)) && trigger !== null">
        <template v-if="hasZeroWidthTrigger">
            <span @click="toggle" :class="`${prefixCls}-zero-width-trigger`">
                <Icon type="bars" />
            </span>
        </template>
        <template v-else>
            <div :class="`${prefixCls}-trigger`" @click="toggle" :style="{ width: siderWidth }">
                <slot :collapsed="selfCollapsed" :toggle="toggle" name="trigger">
                    <Icon :type="triggerIconType"></Icon>
                </slot>
            </div>
        </template>
    </template>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Icon from '../icon';

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    const matchMediaPolyfill = mediaQuery => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {},
            removeListener() {}
        }
    }
    window.matchMedia = window.matchMedia || matchMediaPolyfill
}

const dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
}

const generateId = (() => {
    let i = 0;
    return (prefix = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

export default {
    name: 'Sider',
    components: {
        Icon,
    },
    inject: {
        siderHook: {
            default: {}
        },
    },
    data(){
        return {
            selfCollapsed: this.collapsed,
            below: false,
            belowShow: false,
        }
    },
    provide(){
        return {
            layoutSiderContext: this, // menu组件中使用
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-layout-sider'),
        collapsible: PropTypes.bool,
        collapsed: PropTypes.bool,
        defaultCollapsed: PropTypes.bool,
        reverseArrow: PropTypes.bool,
        trigger: PropTypes.any,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).def(200),
        collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).def(80),
        breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
        theme: PropTypes.oneOf(['light', 'dark']).def('dark'),
    },
    computed: {
        hasZeroWidthTrigger(){
            const { collapsedWidth } = this;
            return parseFloat(String(collapsedWidth || 0)) === 0;
        },
        rawWidth(){
            const { selfCollapsed, collapsedWidth, width } = this;
            return selfCollapsed ? collapsedWidth : width;
        },
        siderWidth(){
            const { rawWidth } = this;
            return typeof rawWidth === 'number' ? `${rawWidth}px` : String(rawWidth || 0);
        },
        triggerIconType(){
            const { selfCollapsed, reverseArrow } = this;
            return (selfCollapsed && !reverseArrow) || (!selfCollapsed && reverseArrow) ? 'right' : 'left';
        },
        classes(){
            const { selfCollapsed, prefixCls, collapsible, trigger, hasZeroWidthTrigger, siderWidth } = this;

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-collapsed`]: !!selfCollapsed,
                [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !hasZeroWidthTrigger,
                [`${prefixCls}-below`]: !!this.below,
                [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0,
            }
        },
        styles(){
            const { siderWidth } = this;

            return {
                flex: `0 0 ${siderWidth}`,
                maxWidth: `${siderWidth}`, // Fix width transition bug in IE11
                minWidth: `${siderWidth}`, // https://github.com/ant-design/ant-design/issues/6349
                width: `${siderWidth}`,
            }
        },
    },
    watch: {
        collapsed(value) {
            this.selfCollapsed = value;
        }
    },
    created(){
        this.uniqueId = this.uniqueId = generateId('ant-sider-');
        let matchMedia;
        if(typeof window !== 'undefined'){
            matchMedia = window.matchMedia;
        }
        if (matchMedia && this.breakpoint && this.breakpoint in dimensionMap) {
            this.mql = matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`);
        }
    },
    mounted(){
        if(this.mql){
            this.mql.addListener(this.responsiveHandler);
            this.responsiveHandler(this.mql);
        }

        if (this.siderHook) {
            this.siderHook.addSider(this.uniqueId);
        }
    },
    beforeDestroy(){
        if (this.mql) {
            this.mql.removeListener(this.responsiveHandler);
        }

        if (this.siderHook) {
            this.siderHook.removeSider(this.uniqueId);
        }
    },
    methods: {
        getChildContext() {
            return {
                siderCollapsed: this.selfCollapsed,
                collapsedWidth: this.collapsedWidth,
            };
        },
        responsiveHandler(mql) {
            this.below = mql.matches;
            if (this.selfCollapsed !== mql.matches) {
                this.setCollapsed(mql.matches, 'responsive');
            }
        },
        setCollapsed(collapsed, type){
            this.selfCollapsed = collapsed;
            this.$emit('collapse', collapsed, type);
        },
        toggle(){
            const collapsed = !this.selfCollapsed;
            this.setCollapsed(collapsed, 'clickTrigger');
        },
        belowShowChange(){
            this.belowShow = !this.belowShow;
        }
    }
}
</script>
