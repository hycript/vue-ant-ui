# Radio 单选框
单选框。

## 何时使用
- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

### 基本
最简单的用法。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/basic.vue
</Wrapper>
</Code>

### 不可用
Radio 不可用。

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/disabled.vue
</Wrapper>
</Code>

### 按钮样式
按钮样式的单选组合。

<Code>
<RadioButton></RadioButton>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioButton.vue
</Wrapper>
</Code>

### 填底的按钮样式
实色填底的单选按钮样式。

<Code>
<RadioButtonSolid></RadioButtonSolid>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioButton-solid.vue
</Wrapper>
</Code>

### RadioGroup 垂直
垂直的 RadioGroup，配合更多输入框选项。

<Code>
<RadioGroupMore></RadioGroupMore>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioGroup-more.vue
</Wrapper>
</Code>

### RadioGroup 组合 - 配置方式
通过配置 `options` 参数来渲染单选框。

<Code>
<RadioGroupOptions></RadioGroupOptions>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioGroup-options.vue
</Wrapper>
</Code>

### 单选组合 - 配合 name 使用
可以为 RadioGroup 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

<Code>
<RadioGroupWithName></RadioGroupWithName>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioGroup-with-name.vue
</Wrapper>
</Code>

### 单选组合
一组互斥的 Radio 配合使用。

<Code>
<RadioGroup></RadioGroup>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/radioGroup.vue
</Wrapper>
</Code>

### 大小
大中小三种组合，可以和表单输入框进行对应配合。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/radio/demo/size.vue
</Wrapper>
</Code>


<script>
import Basic from '~comps/radio/demo/basic';
import Disabled from '~comps/radio/demo/disabled';
import RadioButton from '~comps/radio/demo/radioButton';
import RadioButtonSolid from '~comps/radio/demo/radioButton-solid';
import RadioGroupMore from '~comps/radio/demo/radioGroup-more';
import RadioGroupOptions from '~comps/radio/demo/radioGroup-options';
import RadioGroupWithName from '~comps/radio/demo/radioGroup-with-name';
import RadioGroup from '~comps/radio/demo/radioGroup';
import Size from '~comps/radio/demo/size';

export default {
    components: {
        Basic,
        Disabled,
        RadioButton,
        RadioButtonSolid,
        RadioGroupMore,
        RadioGroupOptions,
        RadioGroupWithName,
        RadioGroup,
        Size,
    },
}
</script>
