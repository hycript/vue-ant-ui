export default {
    exceptListeners: [],
    computed: {
        $$listeners(){
            let { $options, $listeners = [] } = this;
            let { exceptListeners } = $options;
            if(!Array.isArray(exceptListeners)) exceptListeners = [];
            let keys = Object.keys($listeners).filter(key => {
                return !exceptListeners.includes(key);
            })
            let listeners = {}
            keys.forEach(key => {
                listeners[key] = $listeners[key];
            })
            return listeners;
        }
    }
}
