# 标签 Tag

## 基本用法

基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。

<<< @/../src/index.js

<Test>1</Test>
<script>
// import Basic from './basic'
import Test from '../.vuepress/test.md'
console.log('test', Test);
export default {
    components: {
        Test,
    },
    created(){
        console.log(this);
    }
}
</script>
