export default function isTransformSupported(style) {
    if(typeof window === 'undefined') return false;
    style = style || window.document.documentElement.style;
    return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}
