<style lang="less" src="./style/index.less"></style>
<script>
import PropTypes from '../_util/vue-types';
import Checkbox from '../checkbox';

export default {
    name: 'Radio',
    extends: Checkbox,
    inject: {
        InGroup: { default: undefined },
        GroupContext: { default: undefined },
    },
    props: {
        prefixCls: PropTypes.string.def('ant-radio'),
        type: PropTypes.string.def('radio'),
    },
}
</script>
