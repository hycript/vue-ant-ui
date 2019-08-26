<style lang="less" scoped>
@import "../../style/common.less";
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
        <p class="title">基本</p>
        <p>进行标记和分类的小标签。</p>
        <ul>
            <li>用于标记事物的属性和维度。</li>
            <li>进行分类。</li>
        </ul>
    </Box>
    <basic></basic>
    <checkable></checkable>
    <colorful></colorful>
    <control></control>
    <hot-tags></hot-tags>
    <visble></visble>
</Page>
</template>
<script>
import basic from './basic';
import checkable from './checkable';
import colorful from './colorful';
import control from './control';
import hotTags from './hot-tags';
import visble from './visble';

export default {
    components: {
        basic,
        checkable,
        colorful,
        control,
        hotTags,
        visble,
    },
    data(){
        return {

        }
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
