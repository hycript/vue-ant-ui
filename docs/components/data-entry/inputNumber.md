# InputNumber 数字输入框
通过鼠标或键盘，输入范围内的数值。

## 何时使用
当需要获取标准数值时。

## 代码演示

### 基本
数字输入框。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/basic.vue
</Wrapper>
</Code>

### 精度
保留小数点后几位(0 - 100)。

<Code>
<Precision></Precision>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/precision.vue
</Wrapper>
</Code>

### 三种大小
三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

<Code>
<Size></Size>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/size.vue
</Wrapper>
</Code>

### 不可用
点击按钮切换可用状态。

<Code>
<Disabled></Disabled>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/disabled.vue
</Wrapper>
</Code>

### 小数
和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

<Code>
<Digit></Digit>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/digit.vue
</Wrapper>
</Code>

### 格式化展示
通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

<Code>
<Formatter></Formatter>
<Wrapper slot="code">
<<< @/../src/components/inputNumber/demo/formatter.vue
</Wrapper>
</Code>

## API

属性如下

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| defaultValue | 初始值 | number |  |
| disabled | 禁用 | boolean | false |
| max | 最大值 | number | Infinity |
| min | 最小值 | number | -Infinity |
| formatter | 指定输入框展示值的格式 | function(value: number \| string): string | - |
| parser | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number | - |
| precision | 数值精度 | number | - |
| decimalSeparator | 小数点 | string | - |
| size | 输入框大小 | string | 无 |
| step | 每次改变步数，可以为小数 | number\|string | 1 |
| value(v-model) | 当前值 | number |  |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化回调 | Function(value: number \| string) |  |

## 方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

<script>
import Basic from '~comps/inputNumber/demo/basic';
import Precision from '~comps/inputNumber/demo/precision';
import Size from '~comps/inputNumber/demo/size';
import Disabled from '~comps/inputNumber/demo/disabled';
import Digit from '~comps/inputNumber/demo/digit';
import Formatter from '~comps/inputNumber/demo/formatter';

export default {
    components: {
        Basic,
        Precision,
        Size,
        Disabled,
        Digit,
        Formatter,
    },
}
</script>
