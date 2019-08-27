<template>
<div>
    <Button size="small" @click="()=>{this.visible = !this.visible}">
        Toggle
    </Button>
    <Tag closable v-model="visible">
        Movies
    </Tag>
</div>
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
