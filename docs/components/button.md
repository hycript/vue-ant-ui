# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型 
按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/button/demo/basic.vue
</Wrapper>
</Code>

### 按钮组合
可以将多个 `Button` 放入 `ButtonGroup` 的容器中。
通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

<Code>
<ButtonGroup></ButtonGroup>
<Wrapper slot="code">
<<< @/../src/components/button/demo/buttonGroup.vue
</Wrapper>
</Code>

### 不可用状态 
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/button/demo/disabled.vue
</Wrapper>
</Code>


<script>
import Basic from '~comps/button/demo/basic';
import ButtonGroup from '~comps/button/demo/buttonGroup';
import Disabled from '~comps/button/demo/disabled';
export default {
    components: {
        Basic,
        ButtonGroup,
        Disabled,
    },
}
</script>
