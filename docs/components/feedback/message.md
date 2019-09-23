# Message 全局提示
全局展示操作反馈信息。

## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

### 普通提示
信息提醒反馈。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/message/demo/basic.vue
</Wrapper>
</Code>

### 修改延时
自定义时长 `10s`，默认时长为 `3s`。

<Code>
<Duration></Duration>
<Wrapper slot="code">
<<< @/../src/components/message/demo/duration.vue
</Wrapper>
</Code>

### 加载中
进行全局 loading，异步自行移除。

<Code>
<Loading></Loading>
<Wrapper slot="code">
<<< @/../src/components/message/demo/loading.vue
</Wrapper>
</Code>

### 其他提示类型
包括成功、失败、警告。

<Code>
<Other></Other>
<Wrapper slot="code">
<<< @/../src/components/message/demo/other.vue
</Wrapper>
</Code>

### Promise 接口
可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

<Code>
<Thenable></Thenable>
<Wrapper slot="code">
<<< @/../src/components/message/demo/thenable.vue
</Wrapper>
</Code>

## API

组件提供了一些静态方法，使用方式和参数如下：

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.warn(content, [duration], onClose)` // alias of warning
- `message.loading(content, [duration], onClose)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | string \| VNode \| (h) => VNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |

组件同时提供 promise 接口

- `message[level](content, [duration]).then(afterClose)`
- `message[level](content, [duration], onClose).then(afterClose)`

其中`message[level]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise 。


- `message.open(config)`

| 参数 | 说明 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| content | 提示内容 | string \| VNode \| (h) => VNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |
| icon | 自定义图标 | string \| VNode \|(h) => VNode | - |

### 全局方法

还提供了全局配置和全局销毁方法：

- `message.config(options)`
- `message.destroy()`

#### message.config

```js
message.config({
  top: `100px`,
  duration: 2,
  maxCount: 3,
});
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |
| maxCount | 最大显示数, 超过限制时，最早的消息会被自动关闭 | number | - |
| top | 消息距离顶部的位置 | string | `24px` |

<script>
import Basic from '~comps/message/demo/basic';
import Duration from '~comps/message/demo/duration';
import Loading from '~comps/message/demo/loading';
import Other from '~comps/message/demo/other';
import Thenable from '~comps/message/demo/Thenable';

export default {
    components: {
        Basic,
        Duration,
        Loading,
        Other,
        Thenable,
    }
}
</script>
