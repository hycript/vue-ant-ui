<template>
<div>
    <Tooltip placement="topLeft" title="Propmt Text" trigger="contextmenu">
        <Button>右键/contextmenu</Button>
    </Tooltip>
    <br>
    <Tooltip placement="topRight" title="Propmt Text" trigger="click">
        <Button>点击/click</Button>
    </Tooltip>
    <br>
    <Tooltip placement="topLeft" title="Propmt Text" trigger="focus">
        <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus">
    </Tooltip>
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
