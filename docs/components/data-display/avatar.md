# Avatar 头像
用来代表用户或事物，支持图片、图标或字符展示。

## 设计师专属
安装 [Kitchen Sketch 插件 �](https://kitchen.alipay.com)，一键填充高逼格头像和文本.

## 代码演示

### 基本
头像有三种尺寸，两种形状可选。

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/avatar/demo/basic.vue
</Wrapper>
</Code>

### 带徽标的头像
通常用于消息提示。

<Code>
<Badge></Badge>
<Wrapper slot="code">
<<< @/../src/components/avatar/demo/badge.vue
</Wrapper>
</Code>

### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

<Code>
<Type></Type>
<Wrapper slot="code">
<<< @/../src/components/avatar/demo/type.vue
</Wrapper>
</Code>

### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

<Code>
<Dynamic></Dynamic>
<Wrapper slot="code">
<<< @/../src/components/avatar/demo/dynamic.vue
</Wrapper>
</Code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 设置头像的图标类型，参考 `Icon` 组件 | string | - |
| shape | 指定头像的形状 | Enum{ 'circle', 'square' } | `circle` |
| size | 设置头像的大小 | number \| Enum{ 'large', 'small', 'default' } | `default` |
| src | 图片类头像的资源地址 | string | - |
| srcSet | 设置图片类头像响应式资源地址 | string | - |
| alt | 图像无法显示时的替代文本 | string | - |
| loadError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |


<script>
import Basic from '~comps/avatar/demo/basic';
import Badge from '~comps/avatar/demo/badge';
import Type from '~comps/avatar/demo/type';
import Dynamic from '~comps/avatar/demo/dynamic';
export default {
    components: {
        Basic,
        Badge,
        Type,
        Dynamic,
    }
}
</script>
