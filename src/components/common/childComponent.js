export default {
    render(h, context){
        const child = this.$slots.default && this.$slots.default[0];
        return child;
    }
}
