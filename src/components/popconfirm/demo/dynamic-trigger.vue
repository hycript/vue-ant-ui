<template>
<div>
    <vPopconfirm
        title="Are you sure delete this task?"
        v-model="visible"
        @visibleChange="handleVisibleChange"
        @confirm="confirm"
        @cancel="cancel"
        okText="Yes"
        cancelText="No"
    >
        <a href="javascript:;">Delete a task</a>
    </vPopconfirm>
    <br />
    <br />Whether directly execute：
    <input
      type="checkbox"
      v-model="condition"
    >
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            condition: true,
        };
    },
    methods: {
        changeCondition(e) {
            this.condition = e.target.checked;
        },
        confirm() {
            this.visible = false;
            console.error('Next step.');
        },
        cancel() {
            this.visible = false;
            console.error('Click on cancel.');
        },
        handleVisibleChange(visible) {
            if (!visible) return;
            // Determining condition before show the popconfirm.
            if (this.condition) {
                this.confirm(); // next step
                this.visible = false;
            }
        }
    }
};
</script>
