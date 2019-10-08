# Icon 图标
语义化的矢量图形。

## 图标的命名规范
我们为每个图标赋予了语义化的命名，命名规则如下:
- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；
- 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。

> `?` 为可选。

完整的图标设计规范请访问 [图标规范](https://2x.ant.design/docs/spec/icon-cn)。

## 代码演示

### 基本用法
使用 `<Icon />` 标签声明组件，指定图标对应的 `type` 属性.

<Code>
<Basic></Basic>
<Wrapper slot="code">
<<< @/../src/components/icon/demo/basic.vue
</Wrapper>
</Code>

## 图标列表[旧版]
:::tip
点击图标即可复制代码。
:::

### 方向性图标
<IconSet category="direction"></IconSet>

### 提示建议性图标
<IconSet category="suggestion"></IconSet>

### 网站通用图标
<IconSet category="other"></IconSet>

### 品牌和标识
<IconSet category="logo"></IconSet>

### SVG图标
- svg图标支持theme. 
- 且只支持`手动import` @ant-design/icons 中的图标来使用. 
- 使用Icon来显示图标的话, 默认情况下会优先使用已手动引用的svg图标. 如果没有手动引用则使用旧版的iconfont图标.
- svg图标可在项目初始化时统一import.

<Code>
<IconSVG></IconSVG>
<Wrapper slot="code">
<<< @/../src/components/icon/demo/svg.vue
</Wrapper>
</Code>

### 自定义图标
利用 `Icon` 组件封装一个可复用的自定义图标。可以通过 `component` 属性传入一个组件来渲染最终的图标，以满足特定的需求。

<Code>
<Custom></Custom>
<Wrapper slot="code">
<<< @/../src/components/icon/demo/custom.vue
</Wrapper>
</Code>


### 使用 iconfont.cn
对于使用 [iconfont.cn](http://iconfont.cn/) 的用户，通过设置 `createFromIconfontCN` 方法参数对象中的 `scriptUrl` 字段， 即可轻松地使用已有项目中的图标。

<Code>
<Iconfont></Iconfont>
<Wrapper slot="code">
<<< @/../src/components/icon/demo/Iconfont.vue
</Wrapper>
</Code>

### 多色图标
可以通过设置 `theme` 属性为 `twoTone` 来渲染双色图标，并且可以设置主题色。

<Code>
<TwoTone></TwoTone>
<Wrapper slot="code">
<<< @/../src/components/icon/demo/two-tone.vue
</Wrapper>
</Code>

## API
由于旧版图标字体本质上还是文字，可以使用 `style` 和 `class` 设置图标的大小和颜色。


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型。遵循图标的命名规范 | string | - |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |
| theme | 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标, 旧版图标时默认是`undefeind`, svg图标时默认是`outlined` | 'filled' \| 'outlined' \| 'twoTone' |  |
| spin | 是否有旋转动画 | boolean | false |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - |


### SVG 图标

目前使用了 SVG 图标，从而带来了以下优势：

- 完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。
- 在低端设备上 SVG 有更好的清晰度。
- 支持多色图标。
- 对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。
> ⚠️ 在 ant-design 1.2.0 之后全量引入了所有图标，导致 antd 默认的包体积有一定增加，在不远的未来增加新的 API 来实现图标的按需使用，更多相关讨论可关注：[#12011](https://github.com/ant-design/ant-design/issues/12011)。

:::tip
本库的解决方案是svg图标需要用户自己去手动import所需的图标.并通过Icon.add(array)的方式来注册到图标中.
:::

```js
import AlertFill from '@ant-design/icons/lib/fill/AlertFill.js';
import AudioFill from '@ant-design/icons/lib/fill/AudioFill.js';
import BugOutline from '@ant-design/icons/lib/outline/BugOutline.js';
import IssuesCloseOutline from '@ant-design/icons/lib/outline/IssuesCloseOutline.js';

Icon.add([AlertFill, AudioFill, BugOutline, IssuesCloseOutline]);

// ---> 使用

<vIcon type="alert" theme="filled"></vIcon>
<vIcon type="bug" theme="outlined"></vIcon>
```

其中 `theme`, `component`, `twoToneColor` 是 `1.2.x` 版本新增加的属性。最佳实践是给使用的 `<Icon />` 组件传入属性 `theme` 以明确图标的主题风格。例如：

```html
<vIcon type="star" theme="filled" />
```

所有的图标都会以 `<svg>` 标签渲染，可以使用 `style` 和 `class` 设置图标的大小和单色图标的颜色。例如：

```html
<vIcon type="message" :style="{ fontSize: '16px', color: '#08c' }" />
```

### 双色图标主色

对于双色图标，可以通过使用 `Icon.getTwoToneColor()` 和 `Icon.setTwoToneColor(colorString)` 来全局设置图标主色。

### 自定义 font 图标

提供了一个 `createFromIconfontCN` 方法，方便开发者调用在 [iconfont.cn](http://iconfont.cn/) 上自行管理的图标。

```js
Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});
// --->
<vIconFont type="icon-tuichu" />
```

其本质上是创建了一个使用 `<use>` 标签来渲染图标的组件。

`options` 的配置项如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scriptUrl | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 `js` 地址 | string | - |

在 `scriptUrl` 都设置有效的情况下，组件在渲染前会自动引入 [iconfont.cn](http://iconfont.cn/) 项目中的图标符号集，无需手动引入。

见 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code) 查看如何生成 `js` 地址。

<script>
import Basic from '~comps/icon/demo/basic';
import IconSet from '~comps/icon/demo/iconSet';
import IconSVG from '~comps/icon/demo/svg';
import Custom from '~comps/icon/demo/custom';
import Iconfont from '~comps/icon/demo/iconfont';
import TwoTone from '~comps/icon/demo/two-tone';

export default {
    components: {
        Basic,
        IconSet,
        IconSVG,
        Custom,
        Iconfont,
        TwoTone,
    },
}
</script>
