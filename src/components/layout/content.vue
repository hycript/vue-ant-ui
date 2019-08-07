<script>
import PropTypes from '~utils/vue-types';
import Basic from './basic';

export default {
    extends: Basic,
    props: {
        prefixCls: PropTypes.string.def('ant-layout-content'),
    },
}
</script>
