import Icon from './icon.vue';
import IconSVG from './iconSVG';
import IconFont from './iconFont';
import { setTwoToneColor, getTwoToneColor } from './utils';
import * as defaultSVG from './defaultSVG';

Icon.SVG = IconSVG;
Icon.Font = IconFont;
Icon.setTwoToneColor = setTwoToneColor;
Icon.getTwoToneColor = getTwoToneColor;
Icon.createFromIconfontCN = IconFont.create;
Icon.add = IconSVG.add;

setTwoToneColor('#1890ff');
console.log('iconsvg', IconSVG, defaultSVG);
IconSVG.add(Object.keys(defaultSVG).map(key => defaultSVG[key]));

export default Icon;

export {
    Icon,
    IconSVG,
    IconFont,
    setTwoToneColor,
    getTwoToneColor,
}
