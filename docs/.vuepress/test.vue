<template>
<div class="test" style="margin: 1em;">
    <Demo ref="demo"></Demo>
</div>
</template>
<script>
import Demo from '~comps/input/demo/tooltip';
import vnode from '~comps/common/vnode';
export default {
    components: {
        Demo,
        vnode,
    },
    data(){
        return {
            key: 'test',
        }
    },
    mounted(){
        console.log('dmeo', this.$refs.demo);
    },
    updated(){
        console.log('test updated');
    },
    methods: {

    }
}
</script>
