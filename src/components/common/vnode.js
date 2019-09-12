const is = (data, type) => {
    let _type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    if(type === undefined) return _type;
    return _type === type;
}

const parseStyleText = (cssText = '', camel) => {
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

const stringifyClassData = (classData) => {
    let _type = is(classData);
    if(_type === 'object'){
        return Object.keys(classData).filter(cls => {
            return !!classData[cls];
        }).join(' ');
    }else if(_type === 'array'){
        return classData.join(' ');
    }
    return classData;
}

const mergeListeners = (cdata = {}, odata = {}) => {
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

export default {
    functional: true,
    props: ['vnodes', 'vnodesReverse', 'vnodesFilter', 'slot', 'propGenerators', 'dataGenerators'],
    render(h, ctx) {
        let { attrs = {}, key, ...otherData } = ctx.data;
        let { vnodes: _vnodes, vnodesReverse = false, slot, propGenerators = {}, dataGenerators = {} } = ctx.props || {};

        let keysOfGenerators = Object.keys(propGenerators);
        let keysOfDataGenerators = Object.keys(dataGenerators);

        let data = {
            ...otherData,
            ...dataGenerators,
        };

        if(Object.keys(attrs).length > 0 || keysOfGenerators.length > 0) data['attrs'] = attrs;

        let keys = Object.keys(data);

        let vnodes = ctx.props.vnodes && ctx.props.vnodes.length > 0 ? ctx.props.vnodes : ctx.children;

        // console.error('.vuepress vnode', ctx, ctx.data, vnodes, vnodes[0] && Object.keys(vnodes[0].data));

        if(!vnodes || vnodes.length === 0) return undefined;

        if(vnodesReverse){
            vnodes = vnodes.reverse();
        }

        //keys.length > 0 &&
        vnodes.forEach(vnode => {
            if(!vnode || !vnode.tag || (vnode.text && vnode.text.trim() !== '')) return;

            vnode.data = Object.assign({}, vnode.data, { slot });

            // vnode.key = key || vnode.key;
            let propsKey = [];
            let propsData = {}

            if(keys.length === 0) return;

            let { componentOptions } = vnode;
            if(componentOptions){
                propsData = componentOptions.propsData;
                propsKey = Object.keys((componentOptions.Ctor && componentOptions.Ctor.options.props) || {});
            }

            let _data = data;

            if(keysOfDataGenerators > 0 || keysOfGenerators.length > 0){
                _data = Object.assign({}, data);

                keysOfDataGenerators.forEach(key => {
                    const generator = propGenerators[key]
                    if(typeof generator !== 'function') return;
                    _data[key] = generator(vnode, vnode.data);
                })

                let _attrs = {};
                keysOfGenerators.forEach(key => {
                    const generator = propGenerators[key]
                    if(typeof generator !== 'function') return;
                    _attrs[key] = generator(vnode, vnode.data);
                });

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
                        if(!(k in propsData)){
                            propsData[k] = odata[k];
                            delete odata[k];
                        }
                    })
                }

                let _type = is(cdata || odata);

                if(_type !== is(odata)) return;

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
