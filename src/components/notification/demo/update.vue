<template>
    <vButton type="primary" @click="openNotification">Open the notification box</vButton>
</template>
<script>
const key = 'updatable';
export default {
    methods: {
        openNotification() {
            this.$notification.open({
                key,
                message: 'Notification Title',
                description: 'description.'
            });
            setTimeout(() => {
                this.$notification.open({
                    key,
                    message: 'New Title',
                    description: 'New description.'
                });
            }, 1000);
        }
    }
};
</script>
