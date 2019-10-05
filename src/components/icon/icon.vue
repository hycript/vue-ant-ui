<style lang="less">
@import '../style/index.less';
@import './style/index.less';
</style>
<template>
<i v-if="isDefaultIcon" :class="classes" v-on="$listeners"></i>
<IconSVG v-else v-bind="$props" v-on="$listeners"><slot></slot></IconSVG>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';
import IconSVG from './iconSVG';
import defaultIcon from './defaultIcon';
import iconProps from './iconProps.js';
import { withThemeSuffix, removeTypeTheme, alias } from './utils';

export default {
    name: 'Icon',
    components: {
        IconSVG,
    },
    props: {
        ...iconProps,
    },
    computed: {
        themeType(){
            const { type, theme } = this;
            if(!type) return;
            return withThemeSuffix(
                removeTypeTheme(alias(type)), theme
            );
        },
        isDefaultIcon(){
            const { themeType, type, theme = 'outlined' } = this;
            if(!themeType) return false;
            if(IconSVG.has(type, theme)) return false;
            return defaultIcon.indexOf(themeType) > -1;
        },
        classes(){
            const { isDefaultIcon, themeType, type, spin } = this;
            if(!isDefaultIcon) return;
            return {
                anticon: true,
                'anticon-usefont': true,
                'anticon-spin': !!spin || type === 'loading',
                [`anticon-${themeType}`]: true,
            };
        },
    },
}
</script>
