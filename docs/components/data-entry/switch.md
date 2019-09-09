# Switch 开关
开关选择器。

## 何时使用
- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本用法
最简单的用法。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/switch/demo/basic.vue
</Wrapper>
</Code>

### 不可用
Switch 失效状态。

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/switch/demo/disabled.vue
</Wrapper>
</Code>

### 文字和图标
带有文字和图标。

<Code>
<DText></DText>
<Wrapper slot="code">
<<< @/../src/components/switch/demo/text.vue
</Wrapper>
</Code>

### 两种大小
`size="small"` 表示小号开关。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/switch/demo/size.vue
</Wrapper>
</Code>

### 加载中
标识开关操作仍在执行中。

<Code>
<Loading></Loading>
<Wrapper slot="code">
<<< @/../src/components/switch/demo/loading.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | `false` |
| checked(v-model) | 指定当前是否选中 | boolean | `false` |
| defaultChecked | 初始是否选中 | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |
| loading | 加载中的开关 | boolean | `false` |
| size | 开关大小，可选值：`default` `small` | string | `default` |
| checkedChildren | 选中时的内容 | string \| slot |  |
| unCheckedChildren | 非选中时的内容 | string \| slot |  |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | Function(checked:Boolean) |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

<script>
import Basic from '~comps/switch/demo/basic';
import Disabled from '~comps/switch/demo/disabled';
import DText from '~comps/switch/demo/text';
import Size from '~comps/switch/demo/size';
import Loading from '~comps/switch/demo/loading';

export default {
    components: {
        Basic,
        Disabled,
        DText,
        Size,
        Loading,
    },
}
</script>
