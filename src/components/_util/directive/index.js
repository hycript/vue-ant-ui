import clickoutside from './clickoutside';

export default {
    install(Vue){
        Vue.directive('clickoutside', clickoutside);
    }
}
