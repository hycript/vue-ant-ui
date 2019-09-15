export function cloneVNode(vnode, deep) {
    const componentOptions = vnode.componentOptions;
    const data = vnode.data;

    let listeners = {};
    if (componentOptions && componentOptions.listeners) {
        listeners = {
            ...componentOptions.listeners
        };
    }

    let on = {};
    if (data && data.on) {
        on = {
            ...data.on
        };
    }

    const cloned = new vnode.constructor(
        vnode.tag,
        data ? {
            ...data,
            on
        } : data,
        vnode.children,
        vnode.text,
        vnode.elm,
        vnode.context,
        componentOptions ? {
            ...componentOptions,
            listeners
        } : componentOptions,
        vnode.asyncFactory,
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    if(deep){
        if (vnode.children) {
            cloned.children = cloneVNodes(vnode.children, true);
        }
        if (componentOptions && componentOptions.children) {
            componentOptions.children = cloneVNodes(componentOptions.children, true);
        }
    }
    return cloned;
}

export function cloneVNodes(vnodes, deep) {
    const len = vnodes.length;
    const res = new Array(len);
    for (let i = 0; i < len; i++) {
        res[i] = cloneVNode(vnodes[i], deep);
    }
    return res;
}
