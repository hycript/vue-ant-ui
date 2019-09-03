<template>
<div>
    <div class="scrollable-container" ref="container1">
        <div class="background">
            <Affix :target="() => this.$refs.container1" :offsetTop="30">
                <Button type="primary">Fixed at the top of container</Button>
            </Affix>
        </div>
    </div>
    <br><br>
    <div class="scrollable-container" ref="container2">
        <div class="background1">
            <Affix :target="() => this.$refs.container2" :offsetBottom="30">
                <Button type="primary">Fixed at the bottom of container</Button>
            </Affix>
        </div>
    </div>
</div>
</template>
<style lang="less" scoped>
.scrollable-container {
    height: 150px;
    overflow-y: scroll;
    .background {
        padding-top: 120px;
        height: 450px;
        background-image: url("https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg");
    }
    .background1 {
        padding-top: 300px;
        height: 450px;
        background-image: url("https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg");
    }
}
</style>
