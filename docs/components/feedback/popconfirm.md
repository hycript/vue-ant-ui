# Popconfirm 气泡确认框
点击元素，弹出气泡式的确认框。

## 何时使用
目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

### 基本
最简单的用法。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/popconfirm/demo/basic.vue
</Wrapper>
</Code>

### 国际化 
使用 `okText` 和 `cancelText` 自定义按钮文字。

<Code>
<Local></Local>
<Wrapper slot="code">
<<< @/../src/components/popconfirm/demo/local.vue
</Wrapper>
</Code>

### 位置
位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。

<Code>
<Placement></Placement>
<Wrapper slot="code">
<<< @/../src/components/popconfirm/demo/placement.vue
</Wrapper>
</Code>

### 条件触发
可以判断是否需要弹出。

<Code>
<Trigger></Trigger>
<Wrapper slot="code">
<<< @/../src/components/popconfirm/demo/dynamic-trigger.vue
</Wrapper>
</Code>

### 自定义 Icon 图标
使用 `icon` 自定义提示 `icon`。

<Code>
<Icon></Icon>
<Wrapper slot="code">
<<< @/../src/components/popconfirm/demo/icon.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cancelText | 取消按钮文字 | string \| slot | 取消 |
| okText | 确认按钮文字 | string \| slot | 确定 |
| okType | 确认按钮类型 | string | primary |
| title | 确认框的描述 | string \| slot | 无 |
| icon | 自定义弹出气泡 Icon 图标 | slot | &lt;Icon type="exclamation-circle" /&gt; |
| contents | 自定义弹出气泡内容, 在slot-scope中提供 `show` [`func`], `hide` [`func`], `visible` [`bool`] 属性. 使用contents slot时, 以上所有配置将无效. | slot | - |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| cancel | 点击取消的回调 | function(e) |
| confirm | 点击确认的回调 | function(e) |
| visibleChange | 显示隐藏的回调 | function(visible) |

更多属性请参考 [Tooltip](../data-display/tooltip.html#api)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。

<script>
import Basic from '~comps/popconfirm/demo/basic';
import Local from '~comps/popconfirm/demo/local';
import Placement from '~comps/popconfirm/demo/placement';
import Trigger from '~comps/popconfirm/demo/dynamic-trigger';
import Icon from '~comps/popconfirm/demo/icon';
export default {
    components: {
        Basic,
        Local,
        Placement,
        Trigger,
        Icon,
    }
}
</script>
