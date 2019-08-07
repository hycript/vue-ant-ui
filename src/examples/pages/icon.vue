<style lang="less" scoped>
@import '../style/common.less';
.icon {
    border: 1px solid @borderColor;
    padding: 20px;
    margin: 10px;
    font-size: 2rem;
}
</style>
<template>
<Page title="Icon 图标">
    <Box>
        <Icon @click="click" class="icon" type="question" :style="{fontSize: 16, color: '#08c'}" />
        <Icon class="icon" type="loading" :spin="true" :style="{fontSize: 16, color: '#08c'}" />
        <Icon class="icon" type="question-circle-o" />
        <Icon class="icon" type="close-square" />
        <Icon class="icon" type="unlock" />
        <Icon a="1" b="true" class="icon" type="star" />
    </Box>
</Page>
</template>
<script>
import Page from './common/page';
import Box from './common/box';
export default {
    components: {
        Page,
        Box,
    },
    methods: {
        click(){
            alert('click');
        }
    }
}
</script>
