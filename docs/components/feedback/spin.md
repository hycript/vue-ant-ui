# Spin 加载中
用于页面和区块的加载中状态。

## 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

### 基本用法
一个简单的 loading 状态。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/basic.vue
</Wrapper>
</Code>

### 各种大小
小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/size.vue
</Wrapper>
</Code>

### 容器
放入一个容器中。

<Code>
<Inside></Inside>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/inside.vue
</Wrapper>
</Code>

### 卡片加载中
可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

<Code>
<Nested></Nested>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/nested.vue
</Wrapper>
</Code>

### 自定义描述文案
自定义描述文案。

<Code>
<Tip></Tip>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/tip.vue
</Wrapper>
</Code>

### 延迟
延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。

<Code>
<Delay></Delay>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/delay.vue
</Wrapper>
</Code>

### 自定义指示符
使用自定义指示符。

<Code>
<Custom></Custom>
<Wrapper slot="code">
<<< @/../src/components/spin/demo/custom-indicator.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| indicator | 加载指示符 | vNode \| slot | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | 'default' |
| spinning | 是否为加载中状态 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |
| wrapperClassName | 包装器的类属性 | string | - |

### 静态方法

- `Spin.setDefaultIndicator({indicator})`
  同上 `indicator`，你可以自定义全局默认元素

  ```jsx
  Spin.setDefaultIndicator({
    indicator: (h) => {
      return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
    },
  })
  或者
  Spin.setDefaultIndicator({
    indicator: {
      render () {
        return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
      },
    },
  })
  ```
  
<script>
import Basic from '~comps/spin/demo/basic';
import Size from '~comps/spin/demo/size';
import Inside from '~comps/spin/demo/inside';
import Nested from '~comps/spin/demo/nested';
import Tip from '~comps/spin/demo/tip';
import Delay from '~comps/spin/demo/delay';
import Custom from '~comps/spin/demo/custom-indicator';

export default {
    components: {
        Basic,
        Size,
        Inside,
        Nested,
        Tip,
        Delay,
        Custom,
    }
}
</script>
