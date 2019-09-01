<template>
    <div class="wrapper">
        <Tooltip placement="left" title="Prompt Text" :getPopupContainer="false">
            <Button>Adjust automatically / 自动调整</Button>
        </Tooltip>
        <br />
        <Tooltip
            style="marginTop: 10px"
            placement="left"
            title="Prompt Text"
            :autoAdjustOverflow="false"
            :target="false"
            :getPopupContainer="getPopupContainer"
        >
            <Button>Ingore / 不处理</Button>
        </Tooltip>
    </div>
</template>
<script>
export default {
    methods: {
        // tooltip prop getPopupContainer colud be bool, dom or func;
        getPopupContainer(triggerNode){
            return triggerNode.parentElement;
        }
    }
}
</script>
<style scoped>
.wrapper{
    position: relative;
    overflow: hidden;
    padding: 1rem;
    margin: -1rem;
}
</style>
