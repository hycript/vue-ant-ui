class Constants{
    constructor(namespace){
        this.namespace = namespace;
    }
    of(key, value){
        if(typeof key !== 'string'){
            throw new Error(`Expect key of constants to be string, but accpet type ${typeof key} and value 'of'`);
        }
        key = key.toUpperCase();
        if(typeof this[key] !== 'undefined'){
            return this[key];
        }
        this[key] = value !== undefined ? value : `${this.namespace}.${key}`.toUpperCase();
        return this[key];
    }
}


/**
 * usage:
 * const TEST = constant('TEST');
 * TEST.of('ON') => TEST.ON
 */

export default (function(){
    const store = {};
    let uniqueIndex = 0;
    return namespace => {
        if (!namespace) {
            namespace = `CONST_${uniqueIndex}`;
        }
        if(typeof namespace !== 'string'){
            throw new Error(`Expect namespace to be string, but accpet type ${typeof namespace}`);
        }
        namespace = namespace.toUpperCase();
        if(!store[namespace]){
            store[namespace] = new Constants(namespace);
            uniqueIndex ++;
        }
        return store[namespace];
    }
})()
