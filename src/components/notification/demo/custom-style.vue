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
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                style: {
                    width: '600px',
                    marginLeft: `${335 - 600}px`
                }
            });
        }
    }
};
</script>
