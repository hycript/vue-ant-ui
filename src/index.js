import './components/style/index.less';
//directive
import directive from './components/_util/directive';

// general
import Button from './components/button';
import Icon from './components/icon';
import Transition from './components/transition';

//layout
import Grid from './components/grid';
import Layout from './components/layout';

//navigation
import Affix from './components/affix';

//Data Entry
import Switch from './components/switch';

//Data Display
import Avatar from './components/avatar';
import Badge from './components/badge';
import Card from './components/card';
import Popover from './components/popover';
import Tooltip from './components/tooltip';
import Tabs from './components/tabs';
import Tag from './components/tag';

//Feedback
import Popconfirm from './components/popconfirm';
import Spin from './components/spin';

const components = {
    //general
    ...Icon,
    ...Button,
    ...Transition,
    //layout
    ...Grid,
    ...Layout,
    //navigation
    ...Affix,
    //Data Entry
    ...Switch,
    //Data Display
    ...Avatar,
    ...Badge,
    ...Card,
    ...Popover,
    ...Tooltip,
    ...Tabs,
    ...Tag,
    //Feedback
    ...Popconfirm,
    ...Spin,
}

const prefix = 'v';

function install(Vue){
    Vue.use(directive);
    Object.keys(components).forEach(key => {
        const component = components[key];
        if(component) return;
        key = component.name || key;
        Vue.component(prefix + key, component);
    })
}

export default {
    install,
}

export {
    components as Components,
}
