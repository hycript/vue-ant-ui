<template>
<div>
    <p>Align Top</p>
    <vRow type="flex" justify="center" align="top">
        <vCol :span="4">
            <p class="height-100">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-50">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-120">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-80">col-4</p>
        </vCol>
    </vRow>

    <p>Align Center</p>
    <vRow type="flex" justify="space-around" align="middle">
        <vCol :span="4">
            <p class="height-100">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-50">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-120">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-80">col-4</p>
        </vCol>
    </vRow>

    <p>Align Bottom</p>
    <vRow type="flex" justify="space-between" align="bottom">
        <vCol :span="4">
            <p class="height-100">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-50">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-120">col-4</p>
        </vCol>
        <vCol :span="4">
            <p class="height-80">col-4</p>
        </vCol>
    </vRow>
</div>
</template>
<style lang="less" src="./grid.less" scoped></style>
<style lang="less" scoped>
.height-50{
    height: 40px;
    line-height: 40px;
}
.height-80{
    height: 60px;
    line-height: 60px;
}
.height-100{
    height: 75px;
    line-height: 75px;
}
.height-120{
    height: 90px;
    line-height: 90px;
}
</style>
