<template>
<div>
    <vButton size="small" @click="visible = !visible">
        Toggle
    </vButton>
    <vTag closable v-model="visible">
        Movies
    </vTag>
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
