<template>
    <div class="gutter-example">
        <vRow :gutter="16">
            <vCol class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </vCol>
            <vCol class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </vCol>
            <vCol class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </vCol>
            <vCol class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </vCol>
        </vRow>
    </div>
</template>
<style lang="less" scoped>
.gutter-example {
    /deep/ .ant-row {
        > div {
            background: transparent;
            border: 0;
            text-align: center;
            color: #fff;
        }
    }
}
.gutter-box {
    background: #00A0E9;
    padding: 5px 0;
}
</style>
