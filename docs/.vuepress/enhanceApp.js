import pageComponents from '@internal/page-components'
import { Components } from '~/index';
import ContentSlotsDistributor from '@/pages/common/ContentSlotsDistributor';

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    /*
     * fix for 'Unknown custom element'
     * https://github.com/vuejs/vuepress/issues/1173
     */
    for (const [name, component] of Object.entries(pageComponents)) {
        Vue.component(name, component);
    }
    // ...做一些其他的应用级别的优化
    console.log('VUe', Vue, options, router, siteData);
    // Vue.use(UI);
    const { Layout: vLayout, Header: vHeader, Footer: vFooter, Content: vContent, Badge: vBadge, ...others } = Components;
    let components = { vLayout, vHeader, vFooter, vContent, vBadge, ...others, ContentSlotsDistributor };
    Object.keys(components).forEach(key => {
        if(!components[key]) return;
        let component = components[key];
        key = key.indexOf('v') === 0 ? key : component.name || key;
        Vue.component(key, component);
    })
}
