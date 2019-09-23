<template>
    <vButton type="primary" @click="openNotification">Open the notification box</vButton>
</template>
<script>
export default {
    methods: {
        openNotification() {
            this.$notification.open({
                message: 'Notification Title',
                description:
                    'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: 0
            });
        }
    }
};
</script>
