import eventListner from '~utils/eventListener';

export default {
    created(){
        this._listeners = [];
    },
    beforeDestroy(){
        this.clearListener();
        this._listeners = null;
    },
    methods: {
        registListener(target, eventType, callback, once = false){
            this._listeners.push(
                eventListner[!once ? 'on' : 'once'](target, eventType, callback)
            )
        },
        clearListener(){
            if(Array.isArray(this._listeners)){
                this._listeners.forEach(listener => {
                    eventListner.off(listener);
                });
                this._listeners = [];
            }
        }
    },
}
