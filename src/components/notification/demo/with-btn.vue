<template>
    <vButton type="primary" @click="openNotification">Open the notification box</vButton>
</template>
<script>
const close = () => {
    console.log(
        'Notification was closed. Either the close button was clicked or duration time elapsed.'
    );
};
export default {
    methods: {
        openNotification() {
            const key = `open${Date.now()}`;
            this.$notification.open({
                message: 'Notification Title',
                description:
                    'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                btn: h => {
                    return h(
                        'vButton',
                        {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            on: {
                                click: () => this.$notification.close(key)
                            }
                        },
                        'Confirm'
                    );
                },
                key,
                onClose: close
            });
        }
    }
};
</script>
