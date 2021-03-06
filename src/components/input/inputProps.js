import PropTypes from '../_util/vue-types';

export default {
    prefixCls: PropTypes.string.def('ant-input'),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(''),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string.def('text'),
    name: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large', 'default']),
    disabled: PropTypes.bool.def(false),
    readonly: PropTypes.bool,
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    spellCheck: PropTypes.bool,
    autoFocus: PropTypes.bool,
    allowClear: PropTypes.bool,
    inputClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}
