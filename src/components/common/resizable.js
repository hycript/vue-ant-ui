import ResizeObserver from 'resize-observer-polyfill';
import { throttle } from '../_util/lodash';
import PropTypes from '../_util/vue-types';

export default {
    props: {
        resizeObserverDisabled: PropTypes.bool,
    },
    watch: {
        resizeObserverDisabled(val){
            val ? this.destroyObserver() : this.checkObserver();
        }
    },
    mounted () {
        this.$nextTick(this.checkObserver);
    },
    updated(){
        this.$nextTick(this.checkObserver);
    },
    beforeDestroy () {
        this.destroyObserver();
    },
    methods: {
        checkObserver(){
            if(this.$resizeObserverTempEL !== this.$el){
                this.destroyObserver();
                if(!this.resizeObserverDisabled && this.$el.nodeType === 1) this.initObserver();
            }
        },
        initObserver(){
            this.resizeObserver = new ResizeObserver(this.onObserverResize);
            this.resizeObserver.observe(this.$el);
            this.$resizeObserverTempEL = this.$el;
        },
        destroyObserver(){
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
                this.resizeObserver = null;
                this.$resizeObserverTempEL = undefined;
            }
        },
        onObserverResize: throttle(function(entries){
            const { target } = entries[0];
            const { width, height } = target.getBoundingClientRect();
            const fixedWidth = Math.floor(width);
            const fixedHeight = Math.floor(height);
            const { observerSize = { width: 0, height: 0 } } = this;
            // console.error('resize', fixedWidth, fixedHeight);
            if (observerSize.width !== fixedWidth || observerSize.height !== fixedHeight) {
                this.observerSize = { width: fixedWidth, height: fixedHeight };
                this.$emit('resize', this.observerSize);
            }
        }, 66),
    }
}
