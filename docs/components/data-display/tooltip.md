# Tooltip 文字提示
简单的文字提示气泡框。

## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 代码演示

### 基本
最简单的用法。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/tooltip/demo/basic.vue
</Wrapper>
</Code>


### 位置
位置有 12 个方向。

<Code>
<Placement></Placement>
<Wrapper slot="code">
<<< @/../src/components/tooltip/demo/placement.vue
</Wrapper>
</Code>

### 箭头指向
设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

<Code>
<ArrowCenter></ArrowCenter>
<Wrapper slot="code">
<<< @/../src/components/tooltip/demo/arrow-point-at-center.vue
</Wrapper>
</Code>


### 自动调整位置 
气泡框不可见时自动调整位置

<Code>
<AutoAdjust></AutoAdjust>
<Wrapper slot="code">
<<< @/../src/components/tooltip/demo/auto-adjust-overflow.vue
</Wrapper>
</Code>

### 触发条件
trigger: `string` | `array` 

可选: `click`, `focus`, `hover`, `contextmenu`

<Code>
<Trigger></Trigger>
<Wrapper slot="code">
<<< @/../src/components/tooltip/demo/trigger.vue
</Wrapper>
</Code>


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | string \| slot | 无 |

### 共同的 API
以下 API 为 `Tooltip` 、`Popconfirm` 、`Popover` 共享的 API。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | `false` |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | `true` |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上, 当返回false时则渲染在当前节点下. | Function(triggerNode) \| boolean(false) \| Dom | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| overlayClassName | 卡片类名 | string | 无 |
| overlayStyle | 卡片样式 | object | 无 |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | top |
| trigger | 触发行为，可选 `hover/focus/click/contextmenu` | string \| array | hover |
| visible(v-model) | 用于控制浮层显隐 | boolean | false |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| visibleChange | 显示隐藏的回调 | (visible) => void |

## 注意
请确保 `Tooltip` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。

<script>
import Basic from '~comps/tooltip/demo/basic';
import Placement from '~comps/tooltip/demo/placement';
import ArrowCenter from '~comps/tooltip/demo/arrow-point-at-center';
import AutoAdjust from '~comps/tooltip/demo/auto-adjust-overflow';
import Trigger from '~comps/tooltip/demo/trigger';

export default {
    components: {
        Basic,
        Placement,
        ArrowCenter,
        AutoAdjust,
        Trigger,
    }
}
</script>
