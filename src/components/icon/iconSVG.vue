<style lang="less">
@import '../style/index.less';
</style>
<template>
<i :class="classes" v-on="$listeners">
    <vnode v-if="$slots.default" v-bind="svgBaseProps">
        <slot></slot>
    </vnode>
    <svg v-else-if="$slots.inner" v-bind="svgBaseProps" :viewBox="viewBox">
        <slot name="inner"></slot>
    </svg>
    <VueIcon v-else focusable="false" :type="svgType" :primaryColor="twoToneColor"></VueIcon>
</i>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { is } from '../_util/props-util';
import vnode from '../common/vnode';
import VueIcon from '@ant-design/icons-vue';
import iconProps from './iconProps.js';
import { svgBaseProps, withThemeSuffix, removeTypeTheme, getThemeFromTypeName, getTypeTheme, alias } from './utils';

const customCache = {};

export default {
    name: 'IconSVG',
    components: {
        vnode,
        VueIcon,
    },
    props: {
        ...iconProps,
        theme: PropTypes.oneOf(['filled', 'outlined', 'twoTone']).def('outlined'),
    },
    computed: {
        classes(){
            const { prefixCls, type, spin } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-${type}`]: !!type,
                'anticon-spin': !!spin || type === 'loading',
            };
        },
        svgType(){
            const { type, theme, defaultTheme } = this;
            /* if (theme) {
                const themeInName = getThemeFromTypeName(type);
                console.warn(
                    !themeInName || theme === themeInName,
                    `The icon name '${type}' already specify a theme '${themeInName}',` +
                    ` the 'theme' prop '${theme}' will be ignored.`,
                );
            } */
            let realType = withThemeSuffix(
                removeTypeTheme(alias(type)), theme
            );
            if(!customCache[`${type}-${theme}`]){
                console.error('customCache', customCache, `${type}-${theme}`);
                console.error(`Invalid prop: prop "type" is referring to an unadded icon "${type}" with a theme "${theme}".\nPlease make sure you have imported this icon before using it.`);
            }
            return realType;
        }
    },
    created(){
        this.svgBaseProps = svgBaseProps;
    },
    add(icons){
        if(!is(icons, 'array')){
            icons = [icons];
        }
        icons.forEach(icon => {
            customCache[`${icon.name}-${getTypeTheme(icon.theme)}`] = true;
        })
        VueIcon.add(...icons)
    }
}
</script>
