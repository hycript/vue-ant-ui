import Box from './box.vue';
import Page from './page.vue';

const components = {
    Box,
    Page,
}

export default {
    install(Vue){
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
}
