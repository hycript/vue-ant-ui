// vue.config.js
const path = require('path');

const _src = 'src';
const DIRNAME = process.cwd();

module.exports = {
    publicPath: './',
    pages: {
        index: 'src/examples/pro.js',
    },
    configureWebpack: config => {
        // console.log('config', JSON.stringify(config));
        /* if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
        } else {
          // 为开发环境修改配置...
        } */
        const resolve = {};
        let alias = config.resolve && config.resolve.alias || {};
        Object.assign(alias, {
            '~': path.resolve(__dirname, _src, './'),
            '~comps': path.resolve(__dirname, _src, 'components'),
            '~utils': path.resolve(__dirname, _src, 'components/_util'),
            '~pages': path.resolve(__dirname, _src, 'examples/pages'),
            // 'vue$': 'vue/dist/vue.common.js'
        });
        config.resolve.alias = alias;
        // return config;
    }
}
