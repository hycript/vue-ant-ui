<template>
<div>
    <p>sub-element align left</p>
    <vRow type="flex" justify="start">
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
    </vRow>

    <p>sub-element align center</p>
    <vRow type="flex" justify="center">
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
    </vRow>

    <p>sub-element align right</p>
    <vRow type="flex" justify="end">
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
    </vRow>

    <p>sub-element monospaced arrangement</p>
    <vRow type="flex" justify="space-between">
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
    </vRow>

    <p>sub-element align full</p>
    <vRow type="flex" justify="space-around">
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
        <vCol :span="4">col-4</vCol>
    </vRow>
</div>
</template>
<style lang="less" src="./grid.less" scoped></style>
