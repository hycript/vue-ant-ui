import PropTypes from '../_util/vue-types';

export default {
    prefixCls: PropTypes.string.def('anticon'),
    type: PropTypes.string,
    viewBox: PropTypes.any,
    spin: PropTypes.bool.def(false),
    theme: PropTypes.oneOf(['filled', 'outlined', 'twoTone']),
    twoToneColor: PropTypes.string,
}
