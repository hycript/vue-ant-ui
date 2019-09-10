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

export default {
    functional: true,
    render(h, ctx) {
        let { attrs, ...otherData } = ctx.data;
        let { vnodes: _vnodes, ...otherAttrs } = attrs;

        let data = {
            ...otherData,
        };
        Object.keys(otherAttrs) > 0 && (data[attrs] = otherAttrs);

        let keys = Object.keys(data);

        keys.length > 0 && ctx.props.vnodes.forEach(vnode => {
            // Object.assign(vnode.data, data);
            if (!vnode.data) return;
            let _tempKey = {};
            let _keys = Object.keys(vnode.data).concat(keys).filter(key => {
                if(!_tempKey[key]){
                    _tempKey[key] = true;
                    return true;
                }
            });
            _keys.forEach(key => {
                let _odata = vnode.data[key];
                let _adata = data[key];
                if (!_adata) return;

                if(key === 'style'){
                    _odata = parseStyleText(_odata);
                    _adata = parseStyleText(_adata);
                }else if(key === 'class'){
                    console.log('_class', _odata, _adata);
                    _odata = stringifyClassData(_odata);
                    _adata = stringifyClassData(_adata);
                }

                let _type = is(_odata || _adata);
                if(_type !== is(_adata)){
                    vnode.data[key] = _adata;
                    return;
                }

                switch (_type) {
                case 'string':
                    vnode.data[key] = (_odata || '') + ' ' + _adata;
                    break;
                case 'array':
                    vnode.data[key] = (_odata || []).concat(_adata);
                    break;
                case 'object':
                    vnode.data[key] = Object.assign(_odata || {}, _adata);
                    break;
                default:
                    vnode.data[key] = _adata;
                }
            })
        })
        return ctx.props.vnodes;
    }
}
