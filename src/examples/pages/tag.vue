<style lang="less" scoped>
@import "../style/common.less";
.icon {
    border: 1px solid @borderColor;
    padding: 20px;
    margin: 10px;
    font-size: 2rem;
}
</style>
<template>
<Page title="Tag 标签">
    <Box>
        <Tag>Tag 1</Tag>
        <Tag>
            <a href="https://github.com/vueComponent/ant-design">Link</a>
        </Tag>
        <Tag :closable="true" @close="log" @afterClose="afterClose">Tag 2</Tag>
        <Tag closable @close="preventDefault">Prevent Default</Tag>
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
        log(e) {
            console.log(e)
        },
        afterClose(e){
            console.log('Tag afterClose')
        },
        preventDefault(e) {
            e.preventDefault()
            console.log('Clicked! But prevent default.')
        },
    }
}
</script>
