<style lang="less" src="./style/index.less"></style>
<template>
<div></div>
</template>
<script>
import PropTypes from '~utils/vue-types';
import events from '../common/events';
import Icon from '../icon/icon';

export default {
    name: 'Avatar',
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
            const { size } = this;
            return typeof size
        }
    },
    watch: {
        src() {
            this.isImgExist = true;
            this.scale = 1;
        },
    }
}
</script>
