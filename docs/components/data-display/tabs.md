# Tabs 标签页
选项卡切换组件。

## 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/ant-design/components/radio-cn/) 可作为更次级的页签来使用。

## 代码演示

### 基本用法
默认选中第一项。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/basic.vue
</Wrapper>
</Code>

### 禁用
禁用某一项。

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/disabled.vue
</Wrapper>
</Code>

### 图标
有图标的标签。

:::tip
`slot = tab` 中自定义 或者 设置 `TabPane` 上的 `icon`
:::

<Code>
<Icon></Icon>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/icon.vue
</Wrapper>
</Code>

### 滑动
可以左右、上下滑动，容纳更多标签。

<Code>
<Slide></Slide>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/slide.vue
</Wrapper>
</Code>

### 附加内容
可以在页签右边添加附加操作。

<Code>
<Extra></Extra>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/extra.vue
</Wrapper>
</Code>

### 大小
大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/size.vue
</Wrapper>
</Code>

### 位置
有四个位置，`tabPosition="left|right|top|bottom"`。

<Code>
<Position></Position>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/position.vue
</Wrapper>
</Code>

### 卡片式页签
另一种样式的页签，不提供对应的垂直样式。

<Code>
<Card></Card>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/card.vue
</Wrapper>
</Code>

### 新增和关闭页签
只有卡片样式的页签支持新增和关闭选项。
使用 `closable={false}` 禁止关闭。

<Code>
<EditCard></EditCard>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/editcard.vue
</Wrapper>
</Code>

### 卡片式页签容器
用于容器顶部，需要一点额外的样式覆盖。

<Code>
<CardTop></CardTop>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/card-top.vue
</Wrapper>
</Code>

### 自定义新增页签触发器
隐藏默认的页签增加图标，给自定义触发器绑定事件。

<Code>
<CustomTrigger></CustomTrigger>
<Wrapper slot="code">
<<< @/../src/components/tabs/demo/custom-trigger.vue
</Wrapper>
</Code>

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey(v-model) | 当前激活 tab 面板的 key | string | 无 |
| animated | 是否使用动画切换 Tabs，在 `tabPosition=top|bottom` 时有效 | boolean \| {inkBar:boolean, tabPane:boolean} | true, 当 type="card" 时为 false |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | 第一个面板 |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | `false` |
| size | 大小，提供 `large` `default` 和 `small` 三种大小 | string | `default` |
| tabBarExtraContent | tab bar 上额外的元素 | slot | 无 |
| tabBarStyle | tab bar 的样式对象 | object | - |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | `line` |
| tabBarGutter | tabs 之间的间隙 | number | 无 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换面板的回调 | Function(activeKey) {} |
| edit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void |
| nextClick | next 按钮被点击的回调 | Function |
| prevClick | prev 按钮被点击的回调 | Function |
| tabClick | tab 被点击的回调 | Function |

### TabPane

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | `false` |
| key | 对应 activeKey | string | 无 |
| tab | 选项卡头显示文字 | string \| slot | 无 |
| icon | 选项卡头显示图标 | string | 无 |
| closable | 是否可关闭，在 `type="editable-card"` 时有效 | boolean | `true` |
| disabled | 是否禁用 | boolean | 无 |

<script>
import Basic from '~comps/tabs/demo/basic';
import Disabled from '~comps/tabs/demo/disabled';
import Icon from '~comps/tabs/demo/icon';
import Slide from '~comps/tabs/demo/slide';
import Extra from '~comps/tabs/demo/extra';
import Size from '~comps/tabs/demo/size';
import Position from '~comps/tabs/demo/position';
import Card from '~comps/tabs/demo/card';
import EditCard from '~comps/tabs/demo/editcard';
import CardTop from '~comps/tabs/demo/card-top';
import CustomTrigger from '~comps/tabs/demo/custom-trigger';

export default {
    components: {
        Basic,
        Disabled,
        Icon,
        Slide,
        Extra,
        Size,
        Position,
        Card,
        EditCard,
        CardTop,
        CustomTrigger,
    },
}
</script>
