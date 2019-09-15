<template>
<div>
    <vRow>
        <vCol :span="12">col-12</vCol>
        <vCol class="light" :span="12">col-12</vCol>
    </vRow>
    <vRow>
        <vCol :span="8">col-8</vCol>
        <vCol class="light" :span="8">col-8</vCol>
        <vCol :span="8">col-8</vCol>
    </vRow>
    <vRow>
        <vCol :span="6">col-6</vCol>
        <vCol class="light" :span="6">col-6</vCol>
        <vCol :span="6">col-6</vCol>
        <vCol class="light" :span="6">col-6</vCol>
    </vRow>
</div>
</template>
<style lang="less" src="./grid.less" scoped></style>
