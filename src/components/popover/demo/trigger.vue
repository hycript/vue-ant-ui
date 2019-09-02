<template>
<div>
    <Popover placement="topLeft" title="Propmt Text" content="Content" trigger="contextmenu">
        <Button>右键/contextmenu</Button>
    </Popover>
    <br>
    <Popover placement="topRight" title="Propmt Text" content="Content" trigger="click">
        <Button>点击/click</Button>
    </Popover>
    <br>
    <Popover placement="topLeft" title="Propmt Text" content="Content" trigger="focus">
        <input slot-scope="{ show, hide }" @focus="show" @blur="hide" class="inp" type="text" placeholder="focus">
    </Popover>
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
