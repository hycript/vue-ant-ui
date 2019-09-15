<template>
<div>
    <h4>Basic</h4>
    <vButtonGroup>
        <vButton>Cancel</vButton>
        <vButton>OK</vButton>
    </vButtonGroup>
    <vButtonGroup>
        <vButton disabled>L</vButton>
        <vButton disabled>M</vButton>
        <vButton disabled>R</vButton>
    </vButtonGroup>
    <vButtonGroup>
        <vButton>L</vButton><vButton>M</vButton><vButton>R</vButton>
    </vButtonGroup>

    <h4>With Icon</h4>
    <vButtonGroup>
        <vButton type="primary">
            <vIcon type="left" />Go back
        </vButton>
        <vButton type="primary">
            Go forward
            <vIcon type="right" />
        </vButton>
    </vButtonGroup>
    <vButtonGroup>
        <vButton type="primary" icon="cloud" />
        <vButton type="primary" icon="cloud-download" />
    </vButtonGroup>
</div>
</template>
<style lang="less" scoped>
.ant-btn-group{
    margin-right: 0.8rem;
}
</style>
