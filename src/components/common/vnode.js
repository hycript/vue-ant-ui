
import { is, type, parseStyleText, stringifyClassData, mergeListeners } from '../_util/props-util';
import { cloneVNode, cloneVNodes } from '../_util/vnode';
import PropTypes from '../_util/vue-types';

export default {
    functional: true,
    // props: ['vnodes', 'vnodesReverse', 'vnodesFilter', 'slot', 'propGenerator', 'dataGenerator'],
    props: {
        vnodes: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        vnodesReverse: PropTypes.bool,
        slot: PropTypes.string,
        vnodesFilter: PropTypes.func,
        propGenerator: PropTypes.func,
        dataGenerator: PropTypes.func,
    },
    render(h, ctx) {
        let { attrs = {}, key, ...otherData } = ctx.data;
        let { vnodes: _vnodes, vnodesReverse = false, slot, propGenerator, dataGenerator } = ctx.props || {};

        let hasPropGenerator = typeof propGenerator === 'function';
        let hasDataGenerator = typeof dataGenerator === 'function';

        let data = {
            ...otherData,
        };

        if(Object.keys(attrs).length > 0 || hasPropGenerator) data['attrs'] = attrs;

        let keys = Object.keys(data);

        // let vnodes = ctx.props.vnodes && ctx.props.vnodes.length > 0 ? ctx.props.vnodes : ctx.children;
        let vnodes = _vnodes ? typeof _vnodes === 'function' ? _vnodes() : _vnodes :ctx.children;

        if(_vnodes){
            vnodes = cloneVNodes(vnodes, true);
        }

        // console.error('.vuepress vnode', ctx, ctx.data, vnodes);

        if(!vnodes || vnodes.length === 0) return undefined;

        if(vnodesReverse){
            vnodes = vnodes.reverse();
        }

        for(let i = 0; i < vnodes.length; i++){
            let vnode = vnodes[i];
            if(vnode.tag && vnode.tag === 'template'){
                if(!vnode.children || vnode.children.length === 0){
                    vnodes.splice(i, 1);
                }else{
                    vnodes.splice(i, 1, ...vnode.children);
                }
                i --;
            }
        }

        //keys.length > 0 &&
        vnodes.forEach(vnode => {
            if(!vnode || !vnode.tag || (vnode.text && vnode.text.trim() !== '')) return;

            vnode.data = Object.assign({}, vnode.data, { slot });

            // vnode.key = key || vnode.key;
            let propsKey = [];
            let propsData = {}

            if(keys.length === 0 && !hasDataGenerator) return;

            let { componentOptions } = vnode;
            if(componentOptions){
                propsData = Object.assign(componentOptions.propsData || {});
                propsKey = Object.keys((componentOptions.Ctor && componentOptions.Ctor.options.props) || {});
            }

            let _data = data;
            // propGenerator, dataGenerator
            if(hasPropGenerator || hasDataGenerator){
                _data = Object.assign({}, data);
                hasDataGenerator && Object.assign(_data, dataGenerator(vnode, vnode.data) || {});

                let _attrs = {};
                if(hasPropGenerator){
                    _attrs = propGenerator(vnode, vnode.data) || {};
                }

                _data.attrs = Object.assign({}, _data.attrs || {}, _attrs);
            }

            let _tempKey = {};
            let _keys = Object.keys(vnode.data).concat(keys).filter(key => {
                if(!_tempKey[key]){
                    _tempKey[key] = true;
                    return true;
                }
            });

            _keys.forEach(key => {
                let cdata = vnode.data[key];
                // let odata = data[key];
                let odata = _data[key];

                if (!odata || key === 'slot') return;

                switch(key){
                case 'style':
                    cdata = parseStyleText(cdata);
                    odata = parseStyleText(odata);
                    break;
                case 'class':
                    cdata = stringifyClassData(cdata);
                    odata = stringifyClassData(odata);
                    break;
                case 'on':
                    vnode.data[key] = mergeListeners(cdata, odata);
                    return;
                case 'attrs':
                    odata = Object.assign({}, odata);
                    Object.keys(odata || {}).forEach(k => {
                        if(propsKey.indexOf(k) === -1) return;
                        // if(!(k in propsData)){
                        propsData[k] = odata[k];
                        delete odata[k];
                        // }
                    })
                    componentOptions.propsData = propsData;
                }

                let _type = type(cdata || odata);

                if(_type !== type(odata)) return;

                switch (_type) {
                case 'string':
                    vnode.data[key] = `${odata} ${cdata || ''}`.trim();
                    break;
                case 'array':
                    vnode.data[key] = odata.concat(cdata || []);
                    break;
                case 'object':
                    vnode.data[key] = Object.assign({}, odata, cdata || {});
                    break;
                }
            })
        })
        return vnodes;
    }
}
