<style lang="less" src="./style/index.less"></style>
<script>
import PropTypes from '../_util/vue-types';
import Checkbox from '../checkbox';

export default {
    name: 'Radio',
    extends: Checkbox,
    props: {
        prefixCls: PropTypes.string.def('ant-radio'),
        type: PropTypes.string.def('radio'),
    },
}
</script>
