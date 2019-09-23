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
                icon: h => {
                    return h('vIcon', {
                        props: {
                            type: 'smile',
                        },
                        style: 'color: #108ee9;'
                    })
                    // <vIcon type="smile" style="color: #108ee9" />
                }
            });
        }
    }
};
</script>
