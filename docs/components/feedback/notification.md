# Notification 通知提醒框
全局展示通知提醒信息。

## 何时使用
在系统四个角显示通知提醒信息。经常用于以下情况：
- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示

### 基本
最简单的用法，4.5 秒后自动关闭。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/basic.vue
</Wrapper>
</Code>

### 自定义图标
图标可以被自定义。

<Code>
<CustomIcon></CustomIcon>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/custom-icon.vue
</Wrapper>
</Code>

### 自定义样式
使用 style 和 className 来定义样式。

<Code>
<CustomStyle></CustomStyle>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/custom-style.vue
</Wrapper>
</Code>

### 自动关闭的延时
自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

<Code>
<Duration></Duration>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/duration.vue
</Wrapper>
</Code>

### 位置
可以设置通知从右上角、右下角、左下角、左上角弹出。

<Code>
<Placement></Placement>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/placement.vue
</Wrapper>
</Code>

### 自定义按钮
自定义关闭按钮的样式和文字。

<Code>
<WithBtn></WithBtn>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/with-btn.vue
</Wrapper>
</Code>

### 带有图标的通知提醒框
通知提醒框左侧有图标。

<Code>
<WithIcon></WithIcon>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/with-icon.vue
</Wrapper>
</Code>

### 更新消息内容
可以通过唯一的 key 来更新内容。

<Code>
<Update></Update>
<Wrapper slot="code">
<<< @/../src/components/notification/demo/update.vue
</Wrapper>
</Code>

## API

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.warn(config)`
- `notification.open(config)`
- `notification.close(key: String)`
- `notification.destroy()`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| btn | 自定义关闭按钮 | vueNode \| function(h) | - |
| class | 自定义 CSS class | string | - |
| description | 通知提醒内容，必选 | string \| vueNode \| function(h) | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | `4.5` |
| icon | 自定义图标 | vueNode \| function(h) | - |
| key | 当前通知唯一标志 | string | - |
| message | 通知提醒标题，必选 | string \| vueNode \| function(h) | - |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |
| style | 自定义内联样式 | Object \|  string | - |
| onClose | 点击默认关闭按钮时触发的回调函数 | Function | - |
| onClick | 点击通知时触发的回调函数 | Function | - |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `notification.config(options)`

```js
notification.config({
  placement: 'bottomRight',
  bottom: '50px',
  duration: 3,
});
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素。 | string | `24px` |
| duration | 默认自动关闭延时，单位秒 | number | `4.5` |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素。 | string | `24px` |

<script>
import Basic from '~comps/notification/demo/basic';
import CustomIcon from '~comps/notification/demo/custom-icon';
import CustomStyle from '~comps/notification/demo/custom-style';
import Duration from '~comps/notification/demo/duration';
import Placement from '~comps/notification/demo/placement';
import WithBtn from '~comps/notification/demo/with-btn';
import WithIcon from '~comps/notification/demo/with-icon';
import Update from '~comps/notification/demo/update';

export default {
    components: {
        Basic,
        CustomIcon,
        CustomStyle,
        Duration,
        Placement,
        WithBtn,
        WithIcon,
        Update,
    }
}
</script>
