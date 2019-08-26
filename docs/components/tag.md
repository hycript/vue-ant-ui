# 标签 Tag
进行标记和分类的小标签。

## 何时使用
- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示


<!-- ::: tip
该组件为完全受控组件，不支持非受控用法。
::: -->

### 基本用法
基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/basic.vue
</Wrapper>
</Code>

### 可选择
可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。
::: tip
该组件为完全受控组件，不支持非受控用法。
:::
<Code>
<Checkable></Checkable>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/checkable.vue
</Wrapper>
</Code>

<script>
import Basic from '~comps/tag/demo/basic'
import Checkable from '~comps/tag/demo/checkable'
// import Test from '../.vuepress/test.md'
// console.log('test', Test);
export default {
    components: {
        Basic,
        Checkable,
    },
    created(){
        console.log(this);
    }
}
</script>
