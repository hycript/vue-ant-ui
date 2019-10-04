<style></style>
<template>
<IconSVG v-on="$listeners" v-bind="fontProps">
    <template slot="inner">
        <slot>
            <use :xlink:href="`#${type}`"/>
        </slot>
    </template>
</IconSVG>
</template>
<script>
import PropTypes from '../_util/vue-types';
import iconProps from './iconProps.js';
import IconSVG from './iconSVG';
const customCache = {};

export default {
    name: 'IconFont',
    components: {
        IconSVG,
    },
    data(){
        return {
            xlink: 'xlink:href',
        }
    },
    props: {
        ...iconProps,
        prefixCls: PropTypes.string.def('anticon'),
    },
    computed: {
        fontProps(){
            const { $attrs, $props } = this;
            const { type, ...others } = $props;
            return {
                ...$attrs,
                ...others,
            }
        },
    },
    create({ scriptUrl, extraCommonProps = {} } = {}){
        if (
            typeof document !== 'undefined' &&
            typeof window !== 'undefined' &&
            typeof document.createElement === 'function' &&
            typeof scriptUrl === 'string' &&
            scriptUrl &&
            scriptUrl.length &&
            !customCache[scriptUrl]
        ) {
            const script = document.createElement('script');
            script.setAttribute('src', scriptUrl);
            script.setAttribute('data-namespace', scriptUrl);
            customCache[scriptUrl] = extraCommonProps;
            document.body.appendChild(script);
        }
    },
}
</script>
