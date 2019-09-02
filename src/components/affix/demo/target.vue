<template>
<div class="scrollable-container" ref="container">
    <div class="background">
        <Affix :target="() => this.$refs.container" :offsetBottom="30">
            <Button type="primary">Fixed at the top of container</Button>
        </Affix>
    </div>
</div>
</template>
<style lang="less" scoped>
.scrollable-container {
    height: 100px;
    overflow-y: scroll;
    .background {
        padding-top: 60px;
        height: 300px;
        background-image: url("https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg");
    }
}
</style>
