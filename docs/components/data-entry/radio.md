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


## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | - |

### Radio 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | Function(e:Event) | - |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的值 | any | - |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| options | 以配置形式设置子元素 | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - |
| size | 大小，只对按钮样式生效 | `large` \| `default` \| `small` | `default` |
| value(v-model) | 用于设置当前选中的值 | any | - |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |

### RadioGroup 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选项变化时的回调函数 | Function(checkedValue) | - |

## 方法

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |


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
