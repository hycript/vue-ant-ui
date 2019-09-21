export const is = (data, type) => {
    let _type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    if(type === undefined) return _type;
    return _type === type;
}

export const type = data => {
    return is(data);
}

export function isNumeric(value){
    return /^[-+]?\d*(\.\d*)?$/.test(value);
}

export function isEmptyElement(vnode) {
    return !vnode || !(vnode.tag || (vnode.text && vnode.text.trim() !== ''));
}

export function filterEmpty(children = []){
    return children.filter(vnode => !isEmptyElement(vnode));
}

export function hasProp(instance, prop){
    const $options = instance.$options || {};
    const propsData = $options.propsData || {};
    return prop in propsData;
}

export function getProp(instance, prop){
    const $options = instance.$options || {};
    const propsData = $options.propsData || {};
    const props = $options.props || {};
    let val = propsData[prop];
    let vueType = props[prop];
    if(val === '' && vueType && vueType.type === Boolean){
        return true;
    }
    return val;
}

export const parseStyleText = (cssText = '', camel) => {
    if(!cssText) return {};
    if(is(cssText, 'object')) return cssText;
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            const tmp = item.split(propertyDelimiter);
            if (tmp.length > 1) {
                const k = tmp[0].trim().replace(/-(\w)/g, function($$, $1){
                    return $1.toUpperCase();
                });
                res[k] = tmp[1].trim();
            }
        }
    });
    return res;
};

export const stringifyClassData = (classData) => {
    let _type = type(classData);
    if(_type === 'object'){
        return Object.keys(classData).filter(cls => {
            return !!classData[cls];
        }).join(' ');
    }else if(_type === 'array'){
        return classData.join(' ');
    }
    return classData;
}

export const mergeListeners = (cdata = {}, odata = {}) => {
    Object.keys(odata).forEach(key => {
        let clistener = cdata[key];
        let olistener = odata[key];
        if(!clistener){
            cdata[key] = olistener
        }else{
            cdata[key] = function(...params){
                olistener(...params);
                clistener(...params);
            }
        }
    })
    return cdata;
}
