<template>
<div>
    <Tooltip v-model="visible" placement="left">
        <template slot='title'>
        prompt text
        </template>
        Tooltip will show when mouse enter.
    </Tooltip>
    <Button @click="visible = true">show</Button>
</div>
</template>
<script>
export default {
    data(){
        return {
            visible: false,
        }
    },
}
</script>
