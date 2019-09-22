<template>
<div class="test" style="margin: 1em;">
    <Demo ref="demo"></Demo>
</div>
</template>
<script>
import Demo from '~comps/alert/demo/banner';
export default {
    components: {
        Demo,
    },
    data(){
        return {
            key: 'test',
        }
    },
    mounted(){
        console.log('dmeo', this.$refs.demo);
    },
    methods: {

    }
}
</script>
