<template>
<div>
    <vAlert
        v-if="visible"
        message="Alert Message Text"
        type="success"
        closable
        :afterClose="handleClose"
    />
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: true
        };
    },
    methods: {
        handleClose() {
            this.visible = false;
        }
    }
};
</script>
