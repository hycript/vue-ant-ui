# Checkbox 多选框
多选框

## 何时使用
- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本用法
简单的checkbox

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/basic.vue
</Wrapper>
</Code>

### 全选
在实现全选效果时，你可能会用到`indeterminate`属性

<Code>
<CheckAll></CheckAll>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/check-all.vue
</Wrapper>
</Code>

### 不可用
checkbox 不可用

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/disabled.vue
</Wrapper>
</Code>

### 受控的checkbox
联动checkbox

<Code>
<Controller></Controller>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/controller.vue
</Wrapper>
</Code>

### Checkbox组
方便的从数组生成checkbox

<Code>
<Group></Group>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/group.vue
</Wrapper>
</Code>

### 布局
Checkbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局

<Code>
<Layout></Layout>
<Wrapper slot="code">
<<< @/../src/components/checkbox/demo/layout.vue
</Wrapper>
</Code>

## API

### 属性

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |


#### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | Function(e:Event) | - |


#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |
| disabled | 整组失效 | boolean | false |
| options | 指定可选项，可以通过 slot="label" slot-scope="option" 定制`label` | string\[] \| Array&lt;{ label: string value: string disabled?: boolean, onChange?: function }> | \[] |
| value | 指定选中的选项 | string\[] | \[] |
| label | 通过 options渲染的checkbox的label可使用插槽定制。`v-slot:label="option"` | slot | - |

#### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | Function(checkedValue) | - |

### 方法

#### Checkbox

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |


<script>
import Basic from '~comps/checkbox/demo/basic';
import CheckAll from '~comps/checkbox/demo/check-all';
import Disabled from '~comps/checkbox/demo/disabled';
import Controller from '~comps/checkbox/demo/controller';
import Group from '~comps/checkbox/demo/group';
import Layout from '~comps/checkbox/demo/layout';

export default {
    components: {
        Basic,
        CheckAll,
        Disabled,
        Controller,
        Group,
        Layout,
    },
}
</script>
