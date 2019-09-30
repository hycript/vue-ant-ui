<template>
<vnode :vnodesFilter="vnodesFilter">
    <slot></slot>
</vnode>
</template>
<script>
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import { throttle } from '../_util/lodash';
import vnode from './vnode';
import resizable from './resizable';

export default {
    name: 'ResizeObserver',
    mixins: [resizable],
    components: {
        vnode,
    },
    methods: {
        vnodesFilter(vnodes = []){
            vnodes = filterEmpty(vnodes);
            if(vnodes.length > 1){
                window.console.error('Find more than one child node with `children` in ResizeObserver. Will only render first one.');
            }else if(vnodes.length === 0){
                window.console.error('`children` of ResizeObserver is empty. Nothing is in observe.');
            }
            vnodes = vnodes.slice(0, 1);
            console.log('vnodesFilter', vnodes);
            return vnodes;
        },
    }
}
</script>
