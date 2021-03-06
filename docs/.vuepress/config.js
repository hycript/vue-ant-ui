const path = require('path');
const DIRNAME = process.cwd();
const sidebar = require('./sidebar');
const _src = '../src'
console.log('DIRNAME', DIRNAME);
module.exports = {
    title: 'Vue-Ant-UI',
    description: '',
    base: '/vue-ant-ui/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.png`
        }],
    ],
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
    chainWebpack: webpackConfig => {
        // webpackConfig.plugins.delete('prefetch');
        webpackConfig.module
            .rule('vue')
            .test(/\.vue$/)
            .use('vue-loader')
            .loader('vue-loader')
            .options({
                compilerOptions: {
                    preserveWhitespace: false
                }
            });
    },
    themeConfig: {
        // sidebar: 'auto',
        sidebar,
        sidebarDepth: 3,
    }
}
