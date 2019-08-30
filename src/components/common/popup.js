import PropTypes from '~utils/vue-types';

export default {
    props: {
        target: {
            type: [HTMLElement, Function, Boolean],
        }
    },
    mounted(){
        console.log('popup mounted');
        let { target } = this;
        if(typeof target === 'function'){
            target = target();
        }
        if(target === false) return;
        this._target = target || document.body;
        this._target.appendChild(this.$el);
    },
    beforeDestroy(){
        this._target && this._target.removeChild(this.$el);
        this._target = undefined;
    },
    render(h, context) {
        const child = this.$slots.default && this.$slots.default[0];
        // const child = context.children[0];
        return child;
    },
}
