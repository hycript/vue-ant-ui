<template>
<div class="test" style="margin: 1em;">
    <Demo></Demo>
</div>
</template>
<script>
import Demo from '~comps/card/demo/tabs';
export default {
    components: {
        Demo,
    },
    data(){
        return {
            key: 'test',
        }
    },
    methods: {

    }
}
</script>
