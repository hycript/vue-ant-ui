<style scoped>
.spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
}
</style>
<template>
<div>
    <vSpin :spinning="spinning">
        <div class="spin-content">可以点击‘切换’按钮，控制本区域的spin展示。</div>
    </vSpin>
    <br>
    Loading state：
    <vSwitch v-model="spinning"></vSwitch>
</div>
</template>
<script>
export default {
    data() {
        return {
            spinning: false
        };
    },
};
</script>
