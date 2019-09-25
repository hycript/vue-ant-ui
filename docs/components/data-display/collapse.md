# Collapse 折叠面板
可以折叠/展开的内容区域。

## 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

### 折叠面板
可以同时展开多个面板，这个例子默认展开了第一个。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/basic.vue
</Wrapper>
</Code>

### 手风琴
手风琴，每次只打开一个tab。默认打开第一个。

<Code>
<Accordion></Accordion>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/accordion.vue
</Wrapper>
</Code>

### 面板嵌套
嵌套折叠面板。

<Code>
<Mix></Mix>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/mix.vue
</Wrapper>
</Code>

### 简洁风格
一套没有边框的简洁样式。

<Code>
<BorderLess></BorderLess>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/borderless.vue
</Wrapper>
</Code>

### 自定义面板
自定义各个面板的背景色、圆角和边距。

<Code>
<Custom></Custom>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/custom.vue
</Wrapper>
</Code>

### 隐藏箭头
你可以通过 `:showArrow="false"` 隐藏 `v-collapse-panel` 组件的箭头图标。

<Code>
<Noarrow></Noarrow>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/noarrow.vue
</Wrapper>
</Code>

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey(v-model) | 当前激活 tab 面板的 key | string\[] \| string | 默认无，accordion模式下默认第一个元素 |
| defaultActiveKey | 初始化选中面板的 key | string | 无 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换面板的回调 | function(key) |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | false |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| header | 面板头内容 | string \| slot | 无 |
| key | 对应 activeKey | string | 无 |

:::tip
header 提供插槽prop `{ isActive }`  
`v-slot:header="{ isActive }"`
:::

<script>
import Basic from '~comps/collapse/demo/basic';
import Accordion from '~comps/collapse/demo/accordion';
import Mix from '~comps/collapse/demo/mix';
import BorderLess from '~comps/collapse/demo/borderless';
import Custom from '~comps/collapse/demo/custom';
import Noarrow from '~comps/collapse/demo/noarrow';

export default {
    components: {
        Basic,
        Accordion,
        Mix,
        BorderLess,
        Custom,
        Noarrow,
    }
}
</script>
