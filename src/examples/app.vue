<style lang="less" src="./style/index.less"></style>
<template>
<div class="container">
    <Nav></Nav>
    <div class="pages">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import Nav from './nav';

export default {
    components: {
        Nav,
    },
    created(){
        console.log('vue', this);
    }
}
</script>
