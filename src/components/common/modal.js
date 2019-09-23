import Vue from 'vue';
import { is } from '../_util/props-util'
/*
 * children: slotbox,
 * children: 'hello world ~~~!',
 * children: {component: slotbox, options: {}, children: 'hello world ~~~!'},
 * children: function(h,$data){ return h(slotbox); }
 * children: [['h1', 'xxxx']]
 */
function childCreator(createElement, children){
    const _VNodes = [];
    if(!is(children, 'array')){
        children = [children]
    }
    children.forEach((child, key) => {
        let vnode = vnodeCreator(createElement, child);
        !!vnode && _VNodes.push(vnode);
    })
    return _VNodes;
}

function vnodeCreator(createElement, component, $data){
    switch(true){
    case is(component, 'function'):
        return component(createElement, $data);
    case is(component, 'string'):
        return component;
    case is(component, 'object'):
        if(component._scopeId){
            return createElement(component, {props: Object.assign({}, $data)});
        }else if(component.component){
            component.options = component.options || {};
            component.options.props = Object.assign(component.options.props || {}, $data);
            return createElement(
                component.component,
                component.options,
                childCreator(createElement, component.children, $data),
                // [].concat(vnodeCreator(createElement, component.children, $data))
            )
        }
        return null;
    case is(component, 'array'):
        component = [].slice.apply(component);
        if(!component[1] || is(component[1], 'object')){
            component[1] = component[1] || {};
            component[1].props = Object.assign(component[1].props || {}, $data);
        }
        return createElement.apply(null, component);
    default:
        return null;
    }
}

export default function({
    component,
    getContainer,
    options,
    store,
    router,
    // data,
    ref = 'component',
    children = [],
}, hook){
    let div = document.createElement('div');
    let container = typeof getContainer === 'function' ? getContainer() : document.body;
    container.appendChild(div);

    return new Vue({
        el: div,
        store,
        router,
        // data,
        mounted(){
            if(typeof hook === 'function'){
                this.$nextTick(() => {
                    hook({ component: this.$refs[ref], container, $root: this });
                })
            }
        },
        render(createElement, ctx){
            console.error('modal options', options);
            return createElement(component, {
                ...options,
                ref,
            }, childCreator(createElement, children, this.$data));
        },
        destroyed(){
            container.removeChild(this.$el);
            container = null;
            div = null;
        }
    });
}

/* var $modal = modal({
    component: child,
    $options: {
        props: this.$data,
    },
    getContainer: () => {
        return this.$el;
    }
}, ({ component, root }) => {
    console.log(component, root, this);
})
console.log($modal); */
