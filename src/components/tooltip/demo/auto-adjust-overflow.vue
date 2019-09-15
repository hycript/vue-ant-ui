<template>
    <div class="wrapper">
        <vTooltip placement="left" title="Prompt Text" :getPopupContainer="false">
            <vButton>Adjust automatically / 自动调整</vButton>
        </vTooltip>
        <br />
        <vTooltip
            style="marginTop: 10px"
            placement="left"
            title="Prompt Text"
            :autoAdjustOverflow="false"
            :target="false"
            :getPopupContainer="getPopupContainer"
        >
            <vButton>Ingore / 不处理</vButton>
        </vTooltip>
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
