# Alert 警告提示
警告提示，展现需要关注的信息。

## 何时使用
- 当某个页面需要向用户显示警告的信息时。

- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

### 基本
最简单的用法，适用于简短的警告提示。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/basic.vue
</Wrapper>
</Code>

### 可关闭的警告提示
显示关闭按钮，点击可关闭警告提示。

<Code>
<Closable></Closable>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/closable.vue
</Wrapper>
</Code>

### 自定义关闭
可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

<Code>
<CloseText></CloseText>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/close-text.vue
</Wrapper>
</Code>

### 含有辅助性文字介绍
含有辅助性文字介绍的警告提示。

<Code>
<Description></Description>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/description.vue
</Wrapper>
</Code>

### 图标
可口的图标让信息类型更加醒目。

<Code>
<Icon></Icon>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/icon.vue
</Wrapper>
</Code>

### 四种样式
共有四种样式 `success`、`info`、`warning`、`error`。

<Code>
<VStyle></VStyle>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/style.vue
</Wrapper>
</Code>

### 平滑地卸载
平滑、自然的卸载提示。

<Code>
<SmoothClosed></SmoothClosed>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/smooth-closed.vue
</Wrapper>
</Code>

### 顶部公告
页面顶部通告形式，默认有图标且`type` 为 `warning`。

<Code>
<Banner></Banner>
<Wrapper slot="code">
<<< @/../src/components/alert/demo/banner.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| banner | 是否用作顶部公告 | boolean | `false` |
| closable | 默认不显示关闭按钮 | boolean | 无 |
| closeText | 自定义关闭按钮 | string \| slot | 无 |
| description | 警告提示的辅助性文字介绍 | string \| slot \| defaultSlot | 无 |
| icon | 自定义图标，`showIcon` 为 `true` 时有效 | vnode \| slot | - |
| message | 警告提示内容 | string\|slot | 无 |
| showIcon | 是否显示辅助图标, `banner` 模式下默认值为 true | boolean | `false` |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`, `banner` 模式下默认值为 `warning` | string | `info` |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发的回调函数 | (e: MouseEvent) => void |
| afterClose | 关闭动画结束后触发的回调函数 | (e: MouseEvent) => void |

<script>
import Basic from '~comps/alert/demo/basic';
import Closable from '~comps/alert/demo/closable';
import CloseText from '~comps/alert/demo/close-text';
import Description from '~comps/alert/demo/description';
import Icon from '~comps/alert/demo/icon';
import VStyle from '~comps/alert/demo/style';
import SmoothClosed from '~comps/alert/demo/smooth-closed';
import Banner from '~comps/alert/demo/banner';

export default {
    components: {
        Basic,
        Closable,
        CloseText,
        Description,
        Icon,
        VStyle,
        SmoothClosed,
        Banner,
    }
}
</script>
