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
    render(h, ctx) {
        let { attrs = {}, ...otherData } = ctx.data;
        let { vnodes: _vnodes, ...otherAttrs } = attrs;

        let data = {
            ...otherData,
        };
        Object.keys(otherAttrs) > 0 && (data[attrs] = otherAttrs);
        let keys = Object.keys(data);

        let vnodes = ctx.props.vnodes && ctx.props.vnodes.length > 0 ? ctx.props.vnodes : ctx.children;

        console.log(ctx, vnodes);

        keys.length > 0 && vnodes.forEach(vnode => {
            if(!vnode || !vnode.tag || (vnode.text && vnode.text.trim() !== '')) return;

            vnode.data = vnode.data || {};

            let _tempKey = {};
            let _keys = Object.keys(vnode.data).concat(keys).filter(key => {
                if(!_tempKey[key]){
                    _tempKey[key] = true;
                    return true;
                }
            });
            _keys.forEach(key => {
                let cdata = vnode.data[key];
                let odata = data[key];
                if (!odata) return;

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
                }

                let _type = is(cdata || odata);
                if(_type !== is(odata)) return;

                switch (_type) {
                case 'string':
                    vnode.data[key] =  `${odata} ${cdata || ''}`;
                    break;
                case 'array':
                    vnode.data[key] = odata.concat(cdata || []);
                    break;
                case 'object':
                    vnode.data[key] = Object.assign(cdata || {}, odata);
                    break;
                }
            })
        })
        return vnodes;
    }
}