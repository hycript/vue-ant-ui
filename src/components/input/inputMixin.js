import { is, hasProp } from '../_util/props-util';
import events from '../common/events';

export default {
    mixins: [events],
    exceptListeners: ['keydown', 'input', 'change', 'compositionstart', 'compositionend'],
    methods: {
        handleKeydown(e) {
            if (e.keyCode === 13) {
                this.$emit('pressEnter', e);
            }
            this.$emit('keydown', e);
        },
        handleChange(e){
            if(this.isComposing) return;
            const { selfValue, format } = this;
            let value = event.target.value;
            if(format){
                if(is(format, 'function')){
                    value = format(value);
                }else{
                    value = value !== '' ? !format.test(value) ? this.selfValue : value : '';
                }
            }
            if(value !== event.target.value){
                event.target.value = value;
            }
            this.update(e, value);
        },
        handleReset(e){
            if(this.disabled) return;
            this.update(e, '');
            this.$nextTick(this.focus);
        },
        update(e, value){
            if(value === this.selfValue) return;
            if(!hasProp(this, 'value')){
                this.selfValue = value;
            }
            e.target.value = value;
            this.$emit('input', value);
            this.$emit('change', e);
        },
        handleCompositionStart(e) {
            this.isComposing = true;
            this.$emit('compositionstart', e);
        },
        handleCompositionEnd(e) {
            this.isComposing = false;
            this.$emit('compositionend', e);
            this.handleChange(e);
        },
        focus(){
            this.$refs.input.focus();
        },
        blur(){
            this.$refs.input.blur();
        },
    }
}
