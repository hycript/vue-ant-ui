# Affix 固钉
将页面元素钉在可视范围。

## 何时使用
当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示
### 基本
最简单的用法。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/affix/demo/basic.vue
</Wrapper>
</Code>

### 固定状态改变的回调
可以获得是否固定的状态。

<Code>
<Change></Change>
<Wrapper slot="code">
<<< @/../src/components/affix/demo/on-change.vue
</Wrapper>
</Code>



### 滚动容器
用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

<Code>
<Target style="margin: -1em;"></Target>
<Wrapper slot="code">
<<< @/../src/components/affix/demo/target.vue
</Wrapper>
</Code>


## API

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |


### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 固定状态改变时触发的回调函数 | Function(affixed) |


**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

<script>
import Basic from '~comps/affix/demo/basic';
import Change from '~comps/affix/demo/on-change';
import Target from '~comps/affix/demo/target';
export default {
    components: {
        Basic,
        Change,
        Target,
    }
}
</script>
