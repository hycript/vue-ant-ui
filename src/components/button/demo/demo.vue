<template>
<div>
    <br>
    <Button type="primary" @mouseenter="log($event, 'mouseenter')" @click="log($event, 'click')">Primary</Button>
    <br><br>
    <Icon type="home" @mouseenter="log($event, 'Icon mouseenter')" />
    <br><br>
</div>
</template>
<script>
export default {
    methods: {
        log($event, msg){
            console.log('msg', msg, $event);
        }
    }
}
</script>
