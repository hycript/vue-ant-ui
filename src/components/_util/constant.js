import { isArray } from "util";

function set(target, key, value){
    target[key] = value;
}

class Constants{
    constructor(namespace){
        this.namespace = namespace;
    }
    of(key, value){
        /* if(typeof key !== 'string'){
            throw new Error(`Expect key of constants to be string, but accpet type ${typeof key} and value 'of'`);
        } */
        if(typeof this[key] !== 'undefined'){
            return this[key];
        }

        if(key !== 0 && !key) return;

        let originString;

        if(typeof key === 'string'){
            originString = key;
            if(value === undefined){
                key = [key];
            }else{
                key = {
                    [key]: value,
                }
            }
        }

        let isArray = Array.isArray(key);

        for(let i in key){
            let value = key[i];
            let k = (isArray ? key[i] : i).toString().toUpperCase();
            this[k] = isArray || value === undefined ? `${this.namespace}.${value}`.toUpperCase() : value;
        }

        return originString !== undefined ? this[originString] : this;
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
