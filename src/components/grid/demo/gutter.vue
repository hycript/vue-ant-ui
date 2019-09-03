<template>
    <div class="gutter-example">
        <Row :gutter="16">
            <Col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </Col>
            <Col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </Col>
            <Col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </Col>
            <Col class="gutter-row" :span="6">
                <div class="gutter-box">col-6</div>
            </Col>
        </Row>
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
