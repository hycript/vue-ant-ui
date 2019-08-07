import Vue from 'vue';
import Router from 'vue-router';
import Routes from '../routes.js';

Vue.use(Router);

const routes = [];

Routes.forEach(route => {
    Object.keys(route.components).forEach(component => {
        routes.push({
            path: `/${component}`,
            component: r => System.import(`~pages/${component}`).then( (module) => r(module) ),
        })
    })
})

const router = new Router({
    mode: 'hash',
    path: '/',
    routes,
})

export default router;
