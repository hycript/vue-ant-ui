<template>
<div>
    <Avatar
        shape="square"
        size="large"
        :style="{ backgroundColor: color, verticalAlign: 'middle' }"
    >{{avatarValue}}</Avatar>
    <Button
        size="small"
        :style="{ marginLeft: 16, verticalAlign: 'middle' }"
        @click="changeValue"
    >改变</Button>
</div>
</template>
<script>
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
export default {
    data() {
        return {
            avatarValue: UserList[0],
            color: colorList[0]
        };
    },
    methods: {
        changeValue() {
            const index = UserList.indexOf(this.avatarValue);
            this.avatarValue =
                index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
            this.color =
                index < colorList.length - 1
                    ? colorList[index + 1]
                    : colorList[0];
        }
    }
};
</script>
