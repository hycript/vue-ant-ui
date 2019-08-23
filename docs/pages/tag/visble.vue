<template>
<Box>
    <p class="title">控制关闭状态</p>
    <p>通过 <code>visible</code> 属性控制关闭状态。</p>
    <div>
        <Button size="small" @click="()=>{this.visible = !this.visible}">
            Toggle
        </Button>
        <Tag closable v-model="visible">
            Movies
        </Tag>
    </div>
</Box>
</template>
<script>
export default {
    data() {
        return {
            visible: true,
        }
    }
}
</script>
