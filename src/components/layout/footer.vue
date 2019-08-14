<script>
import PropTypes from '~utils/vue-types';
import Basic from './basic';

export default {
    name: 'Footer',
    extends: Basic,
    props: {
        prefixCls: PropTypes.string.def('ant-layout-footer'),
    },
}
</script>
