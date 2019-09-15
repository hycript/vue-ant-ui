<template>
<div>
    <vPopover placement="topLeft" title="Propmt Text" content="Content" trigger="contextmenu">
        <vButton>右键/contextmenu</vButton>
    </vPopover>
    <br>
    <vPopover placement="topRight" title="Propmt Text" content="Content" trigger="click">
        <vButton>点击/click</vButton>
    </vPopover>
    <br>
    <vPopover placement="topLeft" title="Propmt Text" content="Content" trigger="focus">
        <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus">
    </vPopover>
</div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.ant-popover-wrapper{
    margin-top: 10px;
}
.inp {
    border: 1px solid #d9d9d9;
    padding: 6px 10px;
    outline: none;
    border-radius: 4px;
    &:focus{
        border-color: red;
    }
}
</style>
