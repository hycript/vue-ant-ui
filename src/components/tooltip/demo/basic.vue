<template>
<div>
    <Tooltip v-model="visible">
        <template slot='title'>
        prompt text
        </template>
        Tooltip will show when mouse enter.
    </Tooltip>
    <test type="ghost">
        <Button @click="toggle">Toggle</Button>
        <Button @click="toggle">Toggle 1</Button>
    </test>
</div>
</template>
<script>
import test from './test.js';
export default {
    components: {
        test
    },
    data(){
        return {
            visible: false,
        }
    },
    methods: {
        toggle(event){
            console.log('toggle');
            event.stopPropagation();
            event.preventDefault();
            this.visible = !this.visible;
        }
    }
}
</script>
