<template>
<div class="test">
    <vButton slot="tabBarExtraContent" @click="change">POS</vButton>
    <hr> <!--  type="editable-card" style="height: 220px;"-->
    <vCard loading></vCard>
</div>
</template>
<script>
export default {
    components: {
    },
    data(){
        return {
            key: 'test',
            tabPosition: 'top',
        }
    },
    methods: {
        log(e){
            console.log(e.type, this.key);
        },
        log2(e){
            console.log('log2', e.type);
        },
        change(){
            let pos = ['top', 'right', 'bottom', 'left'];
            const { tabPosition } = this;
            let index = pos.indexOf(tabPosition);
            index = index + 1;
            if(index >= pos.length) index = 0;
            this.tabPosition = pos[index];
        }
    }
}
</script>
