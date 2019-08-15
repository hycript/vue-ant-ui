import Vue from 'vue';
import App from './app';
import router from './router';
import UI from '../index';
import PageUI from './pages/common'

!!module && module.hot && module.hot.accept();

Vue.use(UI);

Vue.use(PageUI);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
