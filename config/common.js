const path = require('path');
const _ = require('lodash');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const _DEV_ = process.env.NODE_ENV !== 'production';
const DIRNAME = process.cwd();

let config = {
    dll: {
        lib: ['vue/dist/vue.common.js', 'vue-router', 'lodash'],
        // lib: ['jquery', 'react', 'react-router', 'react-dom'],
    },
    dllType: 1, //0: no commons or dll , 1 : dll package, 2 : commonsChunk;
    dllName: 'dll.manifest.json',
    commonName: 'common', //
    publicPathDev: '',
    publicPathProd: '',
    dist: 'dist',
    src: 'src',
    banner: '',
    DEV: _DEV_,
};

config.Resource = {
    page: _DEV_ ? 'examples' : false,
    assetName: '[path][name].[ext]?[hash:8]',
    jsDist: _DEV_ ? 'js' : './',
    jsName: _DEV_ ? '[name].[chunkhash:8].js' : '[name].js',
    cssDist: _DEV_ ? 'css' : './',
    cssName: _DEV_ ? '[name].[chunkhash:8].css' : '[name].css',
    cssExclude: [/node_modules/, /cssglobal/, /plugin/, /assets/],
    copy: {
        // path: ['assets'],
        // ignore: [{ glob: '**/*', dot: true }]
    }
};

config.Postcss = {
    px2rem: false,
    px2remConfig: {
        rootValue: 100,
        unitPrecision: 5,
        propWhiteList: [],
        propBlackList: [],
        selectorBlackList: [],
        ignoreIdentifier: false,
        replace: true,
        mediaQuery: false,
        minPixelValue: 1
    },
};

config.Entry = {
    index: _DEV_ ? './src/examples/index.js' : './src/index.js',
    /*app: './src/js/app.js',
    main: './src/js/main.jsx',
    vendor: './src/js/vendor.js',*/
};

config.Externals = {};

if(!_DEV_){
    config.dll = {};
    config.dllType = 0;
    config.Externals = {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        lodash: {
            commonjs: 'lodash', //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
            commonjs2: 'lodash', //同上
            amd: 'lodash', //如果我们的库使用require.js等加载,等价于 define(['lodash'], factory);
            root: '_', //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
        }
    }
}

config.publicPath = _DEV_ ? config.publicPathDev : config.publicPathProd;
//process.env.NODE_ENV

config.Define = {
    __DEV__: JSON.parse(_DEV_ || 'false'),
};

Object.keys(config.Define).forEach(function (key) {
    config.Define[key] = JSON.stringify(config.Define[key]);
});

config.Devtool = _DEV_ ? 'source-map' : false;

config.Provide = {
    // $: 'webpack-zepto',
}

const Resolve = config.Resolve = {
    extensions: ['.js', '.json', '.jsx', '.vue']
};

Resolve.alias = {
    '~': path.resolve(DIRNAME, config.src, './'),
    '~comps': path.resolve(DIRNAME, config.src, 'components'),
    '~utils': path.resolve(DIRNAME, config.src, 'components/_util'),
    '~pages': path.resolve(DIRNAME, config.src, 'examples/pages'),
    'vue$': 'vue/dist/vue.common.js'
}

config.CssAlias = {
    usage: true,
    alias: {
        '~plugins': Resolve.alias['~plugins'],
        '~asset': Resolve.alias['~asset'],
    }
}

config.ContextReplacement = {
    context: [],
    usage: false,
}
function appendContext(resourceRegExp, newContentResource, newContentRegExp){
    config.ContextReplacement.usage = true;
    config.ContextReplacement.context.push({resourceRegExp, newContentResource, newContentRegExp});
    /*
    *   ContextReplacementPlugin
    *   resourceRegExp  resource matches resourceRegExp
    *   newContentResource  resource from path
    *   newContentRecursive OR newContentRegExp
    *   newContentRecursive  recursive the  newContentResource path
    *   newContentRegExp  all path file matches the newContentRegExp with call by the key name; {key: value};
    */
}

config.Manifest = {
    usage: false,
    rootAssetPath: '',
    include: [],
    body: {},
    assets: undefined,
}

/*
let contentReg = {};
contentReg['home'] = `./module/${projectConfig.home}`;
contentReg['page'] = `./module/${projectConfig.page}`;
for(let i in projectConfig.components){
    contentReg[i] = `./module/${projectConfig.components[i]}`;
}
appendContext(/src([\/\\].+)?$/, path.resolve(DIRNAME, config.src), contentReg);
*/

/* let contentReg = {};
contentReg['a'] = './module/dynamic/dynamicModule/a';
contentReg['b'] = './module/dynamic/dynamicModule/b';
contentReg['c'] = './module/dynamic/dynamicModule/c';
contentReg['f'] = './module/dynamicOther/f';

appendContext(/module([\/\\].+)?$/, path.resolve(DIRNAME, config.src), contentReg); */

module.exports = config;
