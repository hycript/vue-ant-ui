import Notification from '../notification/Notification';
import Message from './message';

const notificationInstance = {};
let key = 1;

let defaultConfig = {
    top: '24px',
    bottom: '24px',
    placement: 'topRight',
    prefixCls: 'ant-notification',
    // transitionName: 'move-up',
    getContainer: undefined,
    maxCount: undefined,
    duration: 4.5,
}

function setNotificationConfig(options){
    const { duration, placement, bottom, top, getContainer } = options;
    Object.keys(defaultConfig).forEach(key => {
        if(options[key] !== undefined){
            defaultConfig[key] = options[key];
            if(['bottom', 'top'].indexOf(key) > -1 && typeof options[key] === 'number'){
                defaultConfig[key] = defaultConfig[key] + 'px';
            }
        }
    })
}

function getPlacementStyle(placement) {
    const { top, bottom, } = defaultConfig;
    if(['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].indexOf(placement) === -1){
        placement = 'bottomRight';
    }
    let isLeft = placement.indexOf('Left') > -1;
    let isTop = placement.indexOf('top') > -1;
    const style = {
        left: isLeft ? 0 : 'auto',
        top: isTop ? top : 'auto',
        right: !isLeft ? 0 : 'auto',
        bottom: !isTop ? bottom : 'auto',
    };

    return style;
}

function getNotificationInstance(prefixCls, placement, callback) {
    const cacheKey = `${prefixCls}-${placement}`;
    if (notificationInstance[cacheKey]) {
        callback(notificationInstance[cacheKey]);
        return;
    }
    const { getContainer } = defaultConfig;
    Notification.newInstance({
        prefixCls,
        class: cacheKey,
        style: getPlacementStyle(placement),
        getContainer,
        closeIcon: h => (<Icon class={`${prefixCls}-close-icon`} type="close" />),
    },
    notification => {
        notificationInstance[cacheKey] = notification;
        callback(notification);
    });
}

function notice(params){
    const { prefixCls: _prefixCls, duration: _duration, placement: _placement } = defaultConfig;
    const { prefixCls = _prefixCls, duration = _duration, placement = _placement, icon, type, description, message, btn, } = params;
    const { key, style = {}, class: className, onClose, onClick } = params;
    getNotificationInstance(prefixCls, placement, notification => {
        const props = {
            prefixCls,
            icon,
            type,
            description,
            message,
            btn,
        }
        notification.notice({
            key,
            duration,
            style,
            closable: true,
            content: h => {
                return <Message { ...{ props } } />
            },
            onClose,
            onClick,
        })
    })
}

const api = {
    open: notice,
    close(key) {
        Object.keys(notificationInstance).forEach(cacheKey =>
            notificationInstance[cacheKey].removeNotice(key),
        );
    },
    config: setNotificationConfig,
    destroy() {
        Object.keys(notificationInstance).forEach(cacheKey => {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    },
};

['success', 'info', 'warning', 'error'].forEach(type => {
    api[type] = (args = {}) =>
        api.open({
            ...args,
            type,
        });
});

api.warn = api.warning;

export default api;
