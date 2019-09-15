<template>
<div>
    <vTooltip v-model="visible" placement="topLeft" arrowPointAtCenter>
        <template slot='title'>
        prompt text
        </template>
        Tooltip will show when mouse enter.
    </vTooltip>
    <vButton @click="visible = true">show</vButton>
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
