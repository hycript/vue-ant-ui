<style lang="less" src="./style/index.less"></style>
<template>
    <div></div>
</template>
<script>
import PropTypes from '../_util/vue-types';

export default {
    name: '',
    data(){
        return {
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-btn'),
    },
    computed: {
        classes(){
            const { prefixCls } = this;

            return {
                [`${prefixCls}`]: true,
            }
        },
    },
    methods: {
    }
}
</script>
