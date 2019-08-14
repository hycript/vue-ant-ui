<style lang="less" src="./style/index.less"></style>
<template>

</template>
<script>
import PropTypes from '~utils/vue-types';

export default {
    name: 'Badeg',
    data () {
        return {

        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-badge'),
        /** Number to show in badge */
        count: PropTypes.oneOfType([PropTypes.number, PropTypes.string, null]).def(null),
        showZero: PropTypes.bool.def(false),
        /** Max count to show */
        overflowCount: PropTypes.number.def(99),
        /** whether to show red dot without number */
        dot: PropTypes.bool.def(false),
        scrollNumberPrefixCls: PropTypes.string.def('ant-scroll-number'),
        status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
        text: PropTypes.string,
        offset: PropTypes.array,
        numberStyle: PropTypes.object.def({}),
    },
    computed: {

    },
}
</script>
