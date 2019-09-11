<style lang="less"></style>
<template>
<div :class="classes" key="inkBar"></div>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'InkTabBarNode',
    props: {
        inkBarAnimated: PropTypes.bool.def(true),
        prefixCls: PropTypes.string,
        styles: PropTypes.object,
        tabPosition: PropTypes.string,
        panels: PropTypes.array,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    },
    computed: {
        classes(){
            const { prefixCls, inkBarAnimated } = this;
            const className = `${prefixCls}-ink-bar`;
            return {
                [className]: true,
                [inkBarAnimated ? `${className}-animated` : `${className}-no-animated`]: true,
            };
        }
    },
    methods: {
        componentDidUpdate(init = false){

        }
    }
}
</script>
