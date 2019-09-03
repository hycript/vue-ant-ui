<template>
<div>
    <Row>
        <Col :span="12">col-12</Col>
        <Col class="light" :span="12">col-12</Col>
    </Row>
    <Row>
        <Col :span="8">col-8</Col>
        <Col class="light" :span="8">col-8</Col>
        <Col :span="8">col-8</Col>
    </Row>
    <Row>
        <Col :span="6">col-6</Col>
        <Col class="light" :span="6">col-6</Col>
        <Col :span="6">col-6</Col>
        <Col class="light" :span="6">col-6</Col>
    </Row>
</div>
</template>
<style lang="less" src="./grid.less" scoped></style>
