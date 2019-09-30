<template>
<div class="test" style="margin: 1em;">
    <Demo ref="demo"></Demo>
</div>
</template>
<script>
import Demo from '~comps/input/demo/autosize-textarea';
import vnode from '~comps/common/vnode';
import ResizeObserver from '~comps/common/resizeObserver';

export default {
    components: {
        Demo,
        vnode,
        ResizeObserver,
    },
    data(){
        return {
            key: 'test',
            show: true,
        }
    },
    mounted(){
        console.log('dmeo', this.$refs.demo);
    },
    updated(){
        console.log('test updated');
    },
    methods: {
        toggle(){
            this.show = !this.show;
        }
    }
}
</script>
