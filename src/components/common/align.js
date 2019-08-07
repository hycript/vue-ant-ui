import domAlign from 'dom-align';
import PropTypes from '~utils/vue-types';
import { throttle } from '~utils/lodash';
import listener from './listener';

function noop () {}

export default {
    mixins: [listener],
    // functional: true,
    data(){
        return {
            aligned: false,
        }
    },
    props: {
        target: PropTypes.func.def(noop),
        align: PropTypes.object.isRequired,
        disabled: PropTypes.bool,
        monitorWindowResize: PropTypes.bool,
    },
    created(){
        const { monitorWindowResize } = this;
        if(monitorWindowResize){
            this.startMonitorWindowResize();
        }
    },
    mounted(){
        this.forceAlign();
    },
    updated(){
        this.forceAlign();
    },
    methods: {
        startMonitorWindowResize(){
            this.registListener(window, 'resize', throttle(this.forceAlign, 100))
        },
        forceAlign(){
            const { disabled, align, target: getTarget } = this;
            if(disabled || !align) return;
            let _nextTick = !this.aligned ? window.setTimeout : this.$nextTick;
            // let _nextTick = window.setTimeout;
            this.aligned = true;
            _nextTick(_ => {
                const source = this.$el;
                if(!source) return;
                const target = getTarget();
                !!target && this.$emit('align', source, domAlign(source, target, align));
            });
            _nextTick = null;
        }
    },
    render(h, context) {
        const child = this.$slots.default && this.$slots.default[0];
        // const child = context.children[0];
        return child;
    },
}
