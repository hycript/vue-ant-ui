import Vue from 'vue';
import App from './app';
import router from './router';
import UI from '../index';

!!module && module.hot && module.hot.accept();

Vue.use(UI);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
