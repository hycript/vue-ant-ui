import addDOMEventListener from 'add-dom-event-listener';

const listener = {
    on(target, eventType, callback){
        return addDOMEventListener(target, eventType, callback);
    },
    off(eventTarget){
        eventTarget.remove();
    },
    once(target, eventType, callback){
        let listener;
        const _callback = (...args) => {
            callback.apply(target, args);
            if(listener){
                listener.remove();
                listener = null;
            }
        }
        listener = addDOMEventListener(target, eventType, _callback);
        return listener;
    }
}

export default listener;
