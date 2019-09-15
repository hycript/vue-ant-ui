<template>
    <vPopconfirm
        title="Are you sure delete this task?"
        @confirm="confirm"
        @cancel="cancel"
        okText="Yes"
        cancelText="No"
        @visibleChange="visibleChange"
    >
        <a href="javascript:;">Delete</a>
    </vPopconfirm>
</template>
<script>
export default {
    methods: {
        confirm(e) {
            console.log('confirm', e);
            // this.$message.success('Click on Yes');
        },
        cancel(e) {
            console.log('cancel', e);
            // this.$message.error('Click on No');
        },
        visibleChange(visible){
            console.log('visibleChange', visible);
        }
    }
};
</script>
