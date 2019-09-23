import Notification from '../notification/Notification';
import Message from './message';

let messageInstance;
let key = 1;

let defaultConfig = {
    top: undefined,
    prefixCls: 'ant-message',
    transitionName: 'move-up',
    getContainer: undefined,
    maxCount: undefined,
    duration: 3,
}

function getMessageInstance(callback){
    if(messageInstance){
        callback(messageInstance);
        return;
    }
    const { prefixCls, transitionName, top, maxCount } = defaultConfig;
    Notification.newInstance({
        prefixCls,
        transitionName,
        style: { top },
        maxCount,
    },
    instance => {
        messageInstance = messageInstance || instance;
        callback(instance)
    })
}

function notice(params){
    const { duration = defaultConfig.duration, onClose, icon, type, content, ...others } = params;
    const target = key++;
    const closePromise = new Promise((resolve, reject) => {
        const callback = () => {
            if(typeof onClose === 'function'){
                params.onClose();
            }
            return resolve(true);
        }
        getMessageInstance(instance => {
            const props = {
                prefixCls: defaultConfig.prefixCls,
                icon,
                type,
                content,
                ...others,
            }

            instance.notice({
                key: target,
                duration,
                style: {},
                content: h => {
                    return <Message { ...{ props } } />
                },
                onClose: callback,
            });
        });
    });

    const result = () => {
        if(messageInstance){
            messageInstance.removeNotice(target);
        }
    }

    result.then = (filled, rejected) => closePromise.then(filled, rejected);
    result.promise = closePromise;
    return result;
}

const api = {
    open: notice,
    config(options){
        // const { top, duration, prefixCls, getContainer, transitionName, maxCount } = options;
        Object.keys(defaultConfig).forEach(key => {
            if(options[key] !== undefined){
                defaultConfig[key] = options[key];
                if(['top', 'transitionName', 'maxCount'].indexOf(key) > -1){
                    messageInstance = null;
                }
            }
        })
    },
    destroy(){
        if(messageInstance){
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};

['success', 'info', 'warning', 'error', 'loading'].forEach(type => {
    api[type] = (content, duration, onClose) => {
        if(typeof duration === 'function'){
            onClose = duration;
            duration = undefined;
        }
        return api.open({ content, duration, type, onClose });
    }
})

api.warn = api.warning;

export default api;
