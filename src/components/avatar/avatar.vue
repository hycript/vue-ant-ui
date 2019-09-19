<style lang="less" src="./style/index.less"></style>
<template>
<span :class="classes" :style="sizeStyle" v-on="$$listeners">
    <img v-if="src && isImgExist" :src="src" :srcSet="srcSet" @error="handleImgLoadError" :alt="alt" />
    <Icon v-else-if="icon" :type="icon"></Icon>
    <span v-else :class="`${prefixCls}-string`" :style="stringStyle" ref="avatarChildren">
        <slot></slot>
    </span>
</span>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';
import Icon from '../icon';

export default {
    name: 'Avatar',
    mixins: [events],
    components: {
        Icon,
    },
    data(){
        return {
            isImgExist: true,
            scale: 1,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-avatar'),
        shape: PropTypes.oneOf(['circle', 'square']).def('circle'),
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['small', 'large', 'default'])]).def('default'),
        src: PropTypes.string,
        srcSet: PropTypes.string,
        icon: PropTypes.string,
        alt: PropTypes.string,
        loadError: PropTypes.func,
    },
    computed: {
        classes(){
            const { prefixCls, size, shape, src, isImgExist, icon } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-lg`]: size === 'large',
                [`${prefixCls}-sm`]: size === 'small',
                [`${prefixCls}-${shape}`]: shape,
                [`${prefixCls}-image`]: src && isImgExist,
                [`${prefixCls}-icon`]: icon,
            }
        },
        sizeStyle(){
            let { size, icon } = this;
            size = size >> 0;
            return size ? {
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
                fontSize: icon ? `${size / 2}px` : '18px',
            } : '';
        },
        stringStyle(){
            let { scale, size } = this;
            size = size >> 0;
            return {
                transform: `scale(${scale}) translateX(-50%)`,
                lineHeight: !!size ? `${size}px` : '',
            }
        }
    },
    watch: {
        src() {
            this.isImgExist = true;
        },
    },
    mounted(){
        this.$nextTick(this.setScale);
    },
    updated(){
        this.$nextTick(this.setScale);
    },
    methods: {
        handleImgLoadError(e){
            const { loadError } = this;
            const errorFlag = typeof loadError === 'function' ? loadError() : undefined;
            if (errorFlag !== false) {
                this.isImgExist = false;
            }
            this.$emit('loadError');
        },
        setScale(){
            const { avatarChildren: childrenNode } = this.$refs || {};
            if(!childrenNode || !this.$el) {
                this.scale = 1;
                return;
            }
            let scale;
            const { offsetWidth } = childrenNode;
            const avatarWidth = this.$el.getBoundingClientRect().width;
            if (avatarWidth - 8 < offsetWidth) {
                scale = (avatarWidth - 8) / offsetWidth;
            } else {
                scale = 1;
            }
            this.scale = scale;
        },
    }
}
</script>
