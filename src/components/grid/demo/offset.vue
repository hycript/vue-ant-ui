<template>
<div>
    <vRow>
        <vCol :span="8">col-8</vCol>
        <vCol :span="8" :offset="8">col-8</vCol>
    </vRow>
    <vRow>
        <vCol :span="6" :offset="6">col-6 col-offset-6</vCol>
        <vCol :span="6" :offset="6">col-6 col-offset-6</vCol>
    </vRow>
    <vRow>
        <vCol :span="12" :offset="6">col-12 col-offset-6</vCol>
    </vRow>
</div>
</template>
<style lang="less" src="./grid.less" scoped></style>
