<template>
<div>
    <vTooltip placement="topLeft" title="Propmt Text" trigger="contextmenu">
        <vButton>右键/contextmenu</vButton>
    </vTooltip>
    <br>
    <vTooltip placement="topRight" title="Propmt Text" trigger="click">
        <vButton>点击/click</vButton>
    </vTooltip>
    <br>
    <vTooltip placement="topLeft" title="Propmt Text" trigger="focus">
        <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus">
    </vTooltip>
</div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.ant-tooltip-wrapper{
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
