import VueIcon from '@ant-design/icons-vue';
// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
};

const fillTester = /-fill$/;
const outlineTester = /-o$/;
const twoToneTester = /-twotone$/;

export function getThemeFromTypeName(type) {
    let result = null;
    if (fillTester.test(type)) {
        result = 'filled';
    } else if (outlineTester.test(type)) {
        result = 'outlined';
    } else if (twoToneTester.test(type)) {
        result = 'twoTone';
    }
    return result;
}

export function removeTypeTheme(type) {
    return type
        .replace(fillTester, '')
        .replace(outlineTester, '')
        .replace(twoToneTester, '');
}

export function withThemeSuffix(type, theme) {
    let result = type;
    if (theme === 'filled') {
        result += '-fill';
    } else if (theme === 'outlined') {
        result += '-o';
    } else if (theme === 'twoTone') {
        result += '-twotone';
    } else if(!!theme){
        console.warn(false, `This icon '${type}' has unknown theme '${theme}'`);
    }
    return result;
}

export function getTypeTheme(theme){
    switch(theme){
    case 'fill':
        return 'filled';
    case 'outline':
        return 'outlined';
    case 'twotone':
        return 'twoTone';
    default:
        return theme;
    }
}

// For alias or compatibility
export function alias(type) {
    switch (type) {
    case 'cross':
        return 'close';
    default:
    }
    return type;
}

export function setTwoToneColor(primaryColor) {
    return VueIcon.setTwoToneColors({
        primaryColor,
    });
}

export function getTwoToneColor() {
    const colors = VueIcon.getTwoToneColors();
    return colors.primaryColor;
}