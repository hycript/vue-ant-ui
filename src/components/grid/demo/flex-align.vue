<template>
<div>
    <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
        <Col :span="4">
            <p class="height-100">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-50">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-120">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-80">col-4</p>
        </Col>
    </Row>

    <p>Align Center</p>
    <Row type="flex" justify="space-around" align="middle">
        <Col :span="4">
            <p class="height-100">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-50">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-120">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-80">col-4</p>
        </Col>
    </Row>

    <p>Align Bottom</p>
    <Row type="flex" justify="space-between" align="bottom">
        <Col :span="4">
            <p class="height-100">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-50">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-120">col-4</p>
        </Col>
        <Col :span="4">
            <p class="height-80">col-4</p>
        </Col>
    </Row>
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
