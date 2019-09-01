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

### 箭头指向
设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

<Code>
<ArrowCenter></ArrowCenter>
<Wrapper slot="code">
<<< @/../src/components/popover/demo/arrow-point-at-center.vue
</Wrapper>
</Code>

<script>
import Basic from '~comps/popover/demo/basic';
import ArrowCenter from '~comps/popover/demo/arrow-point-at-center';
export default {
    components: {
        Basic,
        ArrowCenter,
    }
}
</script>
