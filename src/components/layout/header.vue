<script>
import PropTypes from '../_util/vue-types';
import Basic from './basic';

export default {
    name: 'Header',
    extends: Basic,
    props: {
        prefixCls: PropTypes.string.def('ant-layout-header'),
    },
}
</script>
