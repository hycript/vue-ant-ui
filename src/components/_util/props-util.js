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
