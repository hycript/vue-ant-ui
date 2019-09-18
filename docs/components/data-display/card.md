# Card 卡片
通用卡片容器

## 何时使用
最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 典型卡片
包含标题、内容、操作区域。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/card/demo/basic.vue
</Wrapper>
</Code>

### 无边框
在灰色背景上使用无边框的卡片

<Code>
<BorderLess></BorderLess>
<Wrapper slot="code">
<<< @/../src/components/card/demo/border-less.vue
</Wrapper>
</Code>

### 更灵活的内容展示
可以利用 `vCardMeta` 支持更灵活的内容

<Code>
<Flexible></Flexible>
<Wrapper slot="code">
<<< @/../src/components/card/demo/flexible-content.vue
</Wrapper>
</Code>


###  网格型内嵌卡片
一种常见的卡片内容区隔模式。

<Code>
<Grid></Grid>
<Wrapper slot="code">
<<< @/../src/components/card/demo/grid.vue
</Wrapper>
</Code>

### 栅格卡片
在系统概览页面常常和栅格进行配合。

<Code>
<InColumn></InColumn>
<Wrapper slot="code">
<<< @/../src/components/card/demo/in-column.vue
</Wrapper>
</Code>

### 内部卡片
可以放在普通卡片内部，展示多层级结构的信息

<Code>
<Inner></Inner>
<Wrapper slot="code">
<<< @/../src/components/card/demo/inner.vue
</Wrapper>
</Code>

### 预加载的卡片
数据读入前会有文本块样式

<Code>
<Loading></Loading>
<Wrapper slot="code">
<<< @/../src/components/card/demo/loading.vue
</Wrapper>
</Code>

### 支持更多内容配置
一种支持封面、头像、标题和描述信息的卡片。

<Code>
<Meta></Meta>
<Wrapper slot="code">
<<< @/../src/components/card/demo/meta.vue
</Wrapper>
</Code>

### 简洁卡片
只包含内容区域。

<Code>
<Simple></Simple>
<Wrapper slot="code">
<<< @/../src/components/card/demo/simple.vue
</Wrapper>
</Code>

### 带页签的卡片
可承载更多内容

<Code>
<Tabs></Tabs>
<Wrapper slot="code">
<<< @/../src/components/card/demo/tabs.vue
</Wrapper>
</Code>

## API

### Card

| 参数      | 说明 | 类型 | 默认值 |
| ---       | --- | --- | --- |
| actions   | 卡片操作组，位置在卡片底部 |slots | - |
| activeTabKey | 当前激活页签的 key | string | - |
| headStyle | 自定义标题区域样式 | object | - |
| bodyStyle | 内容区域自定义样式 | object | - |
| bordered  | 是否有边框 | boolean | `true` |
| cover     | 卡片封面 | slot | - |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | 第一个页签 |
| extra     | 卡片右上角的操作区域 | string \| slot | - |
| hoverable | 鼠标移过时可浮起 | boolean | `false` |
| loading   | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | `false` |
| tabList   | 页签标题列表, 可以通过scopedSlots属性自定义tab | Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}> | - |
| title     | 卡片标题 | string \| slot | - |
| type      | 卡片类型，可设置为 `inner` 或 不设置 | string | - |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| tabChange | 页签切换的回调 | (key) => void | - |

### CardGrid
> 无参数及API

### CardMeta

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar   | 头像/图标 | slot | - |
| description | 描述内容 | string \| slot | - |
| title | 标题内容 | string \| slot | - |


<script>
import Basic from '~comps/card/demo/basic';
import BorderLess from '~comps/card/demo/border-less';
import Flexible from '~comps/card/demo/flexible-content';
import Grid from '~comps/card/demo/grid';
import InColumn from '~comps/card/demo/in-column';
import Inner from '~comps/card/demo/inner';
import Loading from '~comps/card/demo/loading';
import Meta from '~comps/card/demo/meta';
import Simple from '~comps/card/demo/simple';
import Tabs from '~comps/card/demo/tabs';

export default {
    components: {
        Basic,
        BorderLess,
        Flexible,
        Grid,
        InColumn,
        Inner,
        Loading,
        Meta,
        Simple,
        Tabs,
    }
}
</script>
