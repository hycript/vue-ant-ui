<template>
    <div class="demo">
        <vInput placeholder="Basic usage" v-model="userName" ref="userNameInput">
            <vIcon slot="prefix" type="user" />
            <template v-if="userName" slot="suffix" >
                <vIcon type="close-circle" @click="emitEmpty" />
            </template>
        </vInput>
        <div style="margin: 24px 0" />
        <vInput suffix="RMB" prefix="￥"></vInput>
        <div style="margin: 24px 0" />
        <vInput>
            <vIcon slot="prefix" type="user"/>
            <vTooltip title="Extra information" slot="suffix">
                <vIcon type="info-circle" style="color: rgba(0,0,0,.45);"/>
            </vTooltip>
        </vInput>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
        };
    },
    methods: {
        emitEmpty() {
            this.$refs.userNameInput.focus();
            this.userName = '';
        }
    }
};
</script>
<style lang="less" scoped>
.demo{
    .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
    }
    .anticon-close-circle:hover {
        color: #999;
    }
    .anticon-close-circle:active {
        color: #666;
    }
}
</style>
