# 标签 Tag
进行标记和分类的小标签。

## 何时使用
- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示


<!-- ::: tip
该组件为完全受控组件，不支持非受控用法。
::: -->

### 基本用法
基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `close` `afterClose` 两个事件。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/basic.vue
</Wrapper>
</Code>

### 可选择
可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。
<!-- ::: tip
该组件为完全受控组件，不支持非受控用法。
::: -->
> 该组件为完全受控组件，不支持非受控用法。

<Code>
<Checkable></Checkable>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/checkable.vue
</Wrapper>
</Code>

### 多彩标签
我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

<Code>
<Colorful></Colorful>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/colorful.vue
</Wrapper>
</Code>

### 动态添加和删除 
用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 `afterClose` 实现。


<Code>
<Control></Control>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/control.vue
</Wrapper>
</Code>

### 热门标签
选择你感兴趣的话题。

<Code>
<HotTags></HotTags>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/hot-tags.vue
</Wrapper>
</Code>

### 控制关闭状态
通过 `visible` 属性控制关闭状态。

<Code>
<Visible></Visible>
<Wrapper slot="code">
<<< @/../src/components/tag/demo/visible.vue
</Wrapper>
</Code>

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | `false` |
| color | 标签色 | string | - |
| visible(v-model) | 是否显示标签 | boolean | `true` |

#### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时的回调 | (e) => void |
| afterClose | 关闭动画完成后的回调 | (e) => void |

### CheckableTag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked(v-model) | 设置标签的选中状态 | boolean | `false` |

#### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 点击标签时触发的回调 | (checked) => void |


<script>
import Basic from '~comps/tag/demo/basic';
import Checkable from '~comps/tag/demo/checkable';
import Colorful from '~comps/tag/demo/colorful';
import Control from '~comps/tag/demo/control';
import HotTags from '~comps/tag/demo/hot-tags';
import Visible from '~comps/tag/demo/visible';
// import Test from '../.vuepress/test.md'
export default {
    components: {
        Basic,
        Checkable,
        Colorful,
        Control,
        HotTags,
        Visible,
    },
}
</script>
