import PropTypes from '~utils/vue-types';

const triggerType = PropTypes.oneOf(['hover', 'focus', 'click', 'contextmenu'])

const placement = ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'];

export default {
    prefixCls: PropTypes.string.def('ant-tooltip'),
    trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]).def('hover'),
    visible: PropTypes.bool,
    placement: PropTypes.oneOf(placement).def('top'),
    transitionName: PropTypes.string.def('zoom-big-fast'),
    overlayStyle: PropTypes.object.def({}),
    overlayClassName: PropTypes.string,
    mouseEnterDelay: PropTypes.number.def(0),
    mouseLeaveDelay: PropTypes.number.def(0.1),
    // getTooltipContainer: PropTypes.func,
    // getPopupContainer: PropTypes.func,
    getPopupContainer: PropTypes.any,
    arrowPointAtCenter: PropTypes.bool.def(false),
    autoAdjustOverflow: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).def(true),
}
