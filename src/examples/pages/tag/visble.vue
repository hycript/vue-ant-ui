<template>
    <Box>
        <p class="title">控制关闭状态</p>
        <p>通过 <code>visible</code> 属性控制关闭状态。</p>
        <div>
            <Tag closable v-model="visible">
                Movies
            </Tag>
            <br />
            <Button size="small" @click="()=>{this.visible = !this.visible}">
                Toggle
            </Button>
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
