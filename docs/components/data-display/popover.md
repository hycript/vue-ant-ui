# Popover 气泡卡片
点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用
当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

### 基本
最简单的用法，浮层的大小由内容区域决定。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/basic.vue
</Wrapper>
</Code>

### 位置
位置有 12 个方向。

<Code>
<Placement></Placement>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/placement.vue
</Wrapper>
</Code>


### 箭头指向
设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

<Code>
<ArrowCenter></ArrowCenter>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/arrow-point-at-center.vue
</Wrapper>
</Code>

### 从浮层内关闭
使用 `visible` 属性控制浮层显示。

也可用slot-scope特性控制浮层显示。 slot-scope 提供 `hide [func]`, `show [func]`, `visible [bool]` 。

<Code>
<Control></Control>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/control.vue
</Wrapper>
</Code>

### 触发条件
trigger: `string` | `array` 

可选: `click`, `focus`, `hover`, `contextmenu`

<Code>
<Trigger></Trigger>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/trigger.vue
</Wrapper>
</Code>

### 悬停点击弹出窗口
以下示例显示如何创建可悬停和单击的弹出窗口。

<Code>
<HoverAndClick></HoverAndClick>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/hoverAndClick.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 卡片内容 | string \| slot | 无 |
| title | 卡片标题 | string \| slot | 无 |

更多属性请参考 [Tooltip](./tooltip.html#API)。

## 注意

请确保 `Popover` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。

<script>
import Basic from '~comps/popover/demo/basic';
import Placement from '~comps/popover/demo/placement';
import ArrowCenter from '~comps/popover/demo/arrow-point-at-center';
import Control from '~comps/popover/demo/control';
import Trigger from '~comps/popover/demo/trigger';
import HoverAndClick from '~comps/popover/demo/hoverAndClick';
export default {
    components: {
        Basic,
        Placement,
        ArrowCenter,
        Control,
        Trigger,
        HoverAndClick,
    }
}
</script>
