import PropTypes from '~utils/vue-types';

export default {
    props: {
        getPopupContainer: {
            // type: [Function, Boolean],
            default: null,
        }
    },
    mounted(){
        let { getPopupContainer } = this;
        let target = typeof getPopupContainer === 'function' ? getPopupContainer(this.$el) : getPopupContainer;
        // console.log('popup mounted', target);
        if(target === false) return;
        if(target === this.$el.parentElement) return;
        this._$target = (target !== true && target) || document.body;
        let _$el = this._$el = document.createElement('div');
        // _$el.style.cssText = 'position: absolute; top: 0px; left: 0px; width: 100%;'
        _$el.appendChild(this.$el);
        this._$target.appendChild(this._$el);
    },
    beforeDestroy(){
        try{
            this._$target && this._$el && this._$target.removeChild(this._$el);
            this._$target = undefined;
            this._$el = undefined;
        }catch(ee){}
    },
    render(h, context) {
        const child = this.$slots.default && this.$slots.default[0];
        // const child = context.children[0];
        return child;
    },
}
