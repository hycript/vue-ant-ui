# Collapse 折叠面板
可以折叠/展开的内容区域。

## 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

### 折叠面板
可以同时展开多个面板，这个例子默认展开了第一个。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/collapse/demo/basic.vue
</Wrapper>
</Code>


<script>
import Basic from '~comps/collapse/demo/basic';
export default {
    components: {
        Basic,
    }
}
</script>
