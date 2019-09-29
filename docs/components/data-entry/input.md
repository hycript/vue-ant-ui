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

### 搜索框
带有搜索按钮的输入框。

<Code>
<SearchInput></SearchInput>
<Wrapper slot="code">
<<< @/../src/components/input/demo/search-input.vue
</Wrapper>
</Code>

### 三种大小
我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/input/demo/size.vue
</Wrapper>
</Code>

### 输入框组合
输入框的组合展现。
注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

<Code>
<Group></Group>
<Wrapper slot="code">
<<< @/../src/components/input/demo/group.vue
</Wrapper>
</Code>

### 文本域
用于多行输入。

<Code>
<Textarea></Textarea>
<Wrapper slot="code">
<<< @/../src/components/input/demo/textarea.vue
</Wrapper>
</Code>

### 前置/后置标签
用于配置一些固定组合。

<Code>
<Addon></Addon>
<Wrapper slot="code">
<<< @/../src/components/input/demo/addon.vue
</Wrapper>
</Code>

### 输入时格式化展示
结合 [Tooltip](/components/data-display/tooltip.html) 组件，实现一个数值输入框，方便内容超长时的全量展现。

<Code>
<Tooltip></Tooltip>
<Wrapper slot="code">
<<< @/../src/components/input/demo/tooltip.vue
</Wrapper>
</Code>


## API

### Input

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string \| slot |  |
| addonBefore | 带标签的 input，设置前置标签 | string \| slot |  |
| defaultValue | 输入框默认内容 | string |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string |  |
| prefix | 带有前缀图标的 input | string \| slot |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| suffix | 带有后缀图标的 input | string \| slot |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`)。 | string | `text` |
| value(v-model) | 输入框内容 | string |  |

### Input 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框内容变化时的回调 | function(e) | |
| pressEnter | 按下回车的回调 | function(e) |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。


### Input.TextArea

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean \| object | false |
| defaultValue | 输入框默认内容 | string |  |
| value(v-model) | 输入框内容 | string |  |

### Input.TextArea 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框内容变化时的回调 | function(e) | |
| pressEnter | 按下回车的回调 | function(e) |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

### Input.Search

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字 | boolean \| slot | false |

### Input.Search 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 点击搜索或按下回车键时的回调 | function(value, event) |
| change | 输入框内容变化时的回调 | function(e) | |

其余属性和 Input 一致。

### Input.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| compact | 是否用紧凑模式 | boolean | false |
| size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |

````html
<v-input-group>
  <v-input />
  <v-input />
</v-input-group>
````


<script>
import Basic from '~comps/input/demo/basic';
import AutosizeTextarea from '~comps/input/demo/autosize-textarea';
import Affix from '~comps/input/demo/affix';
import SearchInput from '~comps/input/demo/search-input';
import Size from '~comps/input/demo/size';
import Group from '~comps/input/demo/group';
import Textarea from '~comps/input/demo/textarea';
import Addon from '~comps/input/demo/addon';
import Tooltip from '~comps/input/demo/tooltip';

export default {
    components: {
        Basic,
        AutosizeTextarea,
        Affix,
        SearchInput,
        Size,
        Group,
        Textarea,
        Addon,
        Tooltip,
    },
}
</script>
