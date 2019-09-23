<template>
    <div>
        <vButton @click="() => openNotificationWithIcon('success')">Success</vButton>
        <vButton @click="() => openNotificationWithIcon('info')">Info</vButton>
        <vButton @click="() => openNotificationWithIcon('warning')">Warning</vButton>
        <vButton @click="() => openNotificationWithIcon('error')">Error</vButton>
    </div>
</template>
<script>
export default {
    methods: {
        openNotificationWithIcon(type) {
            this.$notification[type]({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
            });
        }
    }
};
</script>
