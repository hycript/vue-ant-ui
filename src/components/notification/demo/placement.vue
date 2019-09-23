<template>
    <div>
        <select v-model="selected" :style="{ width: '120px', marginRight: '10px' }">
            <option v-for="val in options" :key="val" :value="val">{{val}}</option>
        </select>
        <vButton type="primary" @click="openNotification">Open the notification box</vButton>
    </div>
</template>
<script>
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
export default {
    data() {
        return {
            options,
            selected: 'topRight'
        };
    },
    watch: {
        selected(val) {
            this.$notification.config({
                placement: val
            });
        }
    },
    methods: {
        openNotification(val) {
            this.$notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
            });
        }
    }
};
</script>
<style lang="less" scoped>
select{
    height: 32px;
    position: relative;
    cursor: pointer;
    margin-right: 11px;
    position: relative;
    line-height: 30px;
    user-select: none;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    border-top-width: 1.02px;
    &:active{
        border-color: #40a9ff;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        border-right-width: 1px !important;
    }
}
</style>
