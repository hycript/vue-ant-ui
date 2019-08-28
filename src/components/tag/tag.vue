<style lang="less" src="./style/index.less"></style>
<template>
<vTransition @after-leave="animationEnd">
    <div v-if="!closed" :class="classes" :style="tagStyle" >
        <slot></slot>
        <Icon v-if="closable" type='cross' @click="close"></Icon>
    </div>
</vTransition>
</template>
<script>
import PropTypes from '~utils/vue-types';
import vTransition from '../transition/transition';
import Icon from '../icon/icon';
import { omit } from '~utils/lodash';

function _isPresetColor(color){
    if (!color) { return false }
    return /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(color)
}

export default {
    name: 'Tag',
    model: {
        prop: 'visble',
    },
    components: {
        vTransition,
        Icon,
    },
    data(){
        return {
            closed: !this.visble,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-tag'),
        color: PropTypes.string,
        closable: PropTypes.bool,
        visble: PropTypes.bool.def(true),
    },
    computed: {
        isPresetColor(){
            return _isPresetColor(this.color)
        },
        classes(){
            const { prefixCls, color, isPresetColor } = this
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${color}`]: isPresetColor,
                [`${prefixCls}-has-color`]: (color && !isPresetColor),
            }
        },
        tagStyle () {
            const { color, isPresetColor } = this
            return {
                backgroundColor: (color && !isPresetColor) ? color : null,
            }
        },
    },
    watch: {
        visble(val){
            this.closed = !val;
        }
    },
    methods: {
        animationEnd(){
            this.$emit('afterClose');
        },
        close (e) {
            console.log('tag close')
            this.$emit('close', e);
            if (e.defaultPrevented) return;
            this.$emit('input', false)
            this.closed = true
        },
    }
}
</script>