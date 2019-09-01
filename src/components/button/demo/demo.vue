<template>
<div>
    <br>
    <Button type="primary" @mouseenter.stop="log($event, 'mouseenter')" @click="log($event, 'click')">Primary</Button>
    <br><br>
    <Icon type="home" @mouseenter="log($event, 'Icon mouseenter')" />
    <br><br>
    <Button @click="visible = !visible">toggle</Button>
    <br><br>
    <Tag v-model="visible" :parent="true" closable>Tag 1</Tag>
    <br><br>
    <Icon type="star"/>
</div>
</template>
<script>
export default {
    data(){
        return {
            visible: true,
        }
    },
    methods: {
        log($event, msg){
            console.log('msg', msg, $event);
        }
    }
}
</script>
