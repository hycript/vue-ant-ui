export function isEmptyElement(vnode) {
    return !vnode || !(vnode.tag || (vnode.text && vnode.text.trim() !== ''));
}

export function filterEmpty(children = []){
    return children.filter(vnode => !isEmptyElement(vnode));
}

export function isNumeric(value){
    return /^[-+]?\d(\.\d*)?$/.test(value);
}
