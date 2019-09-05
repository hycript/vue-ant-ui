# Badge 徽标数
图标右上角的圆形徽标数字。

## 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

### 基本
简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/basic.vue
</Wrapper>
</Code>

### 独立使用
不包裹任何元素即是独立使用，可自定样式展现。

在右上角的 badge 则限定为红色。

<Code>
<NoWrapper></NoWrapper>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/no-wrapper.vue
</Wrapper>
</Code>

### 封顶数字
超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

<Code>
<Overflow></Overflow>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/overflow.vue
</Wrapper>
</Code>

### 讨嫌的小红点
没有具体的数字。

<Code>
<Dot></Dot>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/dot.vue
</Wrapper>
</Code>

### 状态点
用于表示状态的小圆点。

<Code>
<Status></Status>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/status.vue
</Wrapper>
</Code>

### 动态
展示动态变化的效果。

<Code>
<Change></Change>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/change.vue
</Wrapper>
</Code>

### 自定义标题
设置鼠标放在状态点上时显示的文字

<Code>
<Title></Title>
<Wrapper slot="code">
<<< @/../src/components/badge/demo/title.vue
</Wrapper>
</Code>

## API


```vue
<Badge :count="5">
  <a href="#" class="head-example" />
</Badge>
```

```vue
<Badge :count="5" />
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | number \| string \| slot  |  |
| dot | 不展示数字，只有一个小红点 | boolean | false |
| offset | 设置状态点的位置偏移，格式为 [x, y] | [number\|string, number\|string] | - |
| overflowCount | 展示封顶的数字值 | number | 99 |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |
| status | 设置 Badge 为状态点 | Enum{ 'success', 'processing, 'default', 'error', 'warning' } | '' |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | string | '' |
| numberStyle | 设置状态点的样式 | object | '' |
| title | 设置鼠标放在状态点上时显示的文字 | string | `count` |

<script>
import Basic from '~comps/badge/demo/basic';
import NoWrapper from '~comps/badge/demo/no-wrapper';
import Overflow from '~comps/badge/demo/overflow';
import Dot from '~comps/badge/demo/dot';
import Status from '~comps/badge/demo/status';
import Change from '~comps/badge/demo/change';
import Title from '~comps/badge/demo/title';
export default {
    components: {
        Basic,
        NoWrapper,
        Overflow,
        Dot,
        Status,
        Change,
        Title,
    }
}
</script>
