# Input 输入框
通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基本使用
基本使用。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/input/demo/basic.vue
</Wrapper>
</Code>

### 适应文本高度的文本域
`autosize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autosize` 可以设定为一个对象，指定最小行数 `minRows` 和最大行数 `maxRows`。

<Code>
<AutosizeTextarea></AutosizeTextarea>
<Wrapper slot="code">
<<< @/../src/components/input/demo/autosize-textarea.vue
</Wrapper>
</Code>

### 前缀和后缀
在输入框上添加前缀或后缀图标。

<Code>
<Affix></Affix>
<Wrapper slot="code">
<<< @/../src/components/input/demo/affix.vue
</Wrapper>
</Code>

<script>
import Basic from '~comps/input/demo/basic';
import AutosizeTextarea from '~comps/input/demo/autosize-textarea';
import Affix from '~comps/input/demo/affix';

export default {
    components: {
        Basic,
        AutosizeTextarea,
        Affix,
    },
}
</script>
