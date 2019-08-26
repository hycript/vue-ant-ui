const path = require('path');
const DIRNAME = process.cwd();
const sidebar = require('./sidebar');
const _src = '../src'
console.log('DIRNAME', DIRNAME);
module.exports = {
    title: 'Vue-Ant-UI',
    description: '',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(DIRNAME, '.vuepress'),
                '~': path.resolve(DIRNAME, _src, './'),
                '~comps': path.resolve(DIRNAME, _src, 'components'),
                '~utils': path.resolve(DIRNAME, _src, 'components/_util'),
                '~pages': path.resolve(DIRNAME, _src, 'examples/pages'),
            }
        }
    },
    themeConfig: {
        // sidebar: 'auto',
        sidebar,
        sidebarDepth : 3,
    }
}
