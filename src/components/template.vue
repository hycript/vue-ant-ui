<style lang="less" src="./style/index.less"></style>
<template>
    <div></div>
</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
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
