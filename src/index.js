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
import Popover from './components/popover';
import Tooltip from './components/tooltip';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Badge from './components/badge';

//Feedback
import Popconfirm from './components/popconfirm';

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
    ...Popover,
    ...Tooltip,
    ...Tabs,
    ...Tag,
    ...Badge,
    //Feedback
    ...Popconfirm,
}

function install(Vue){
    Vue.use(directive);
    Object.keys(components).forEach(key => {
        key = components[key].name || key;
        Vue.component(key, components[key]);
    })
}

export default {
    install,
}

export {
    components as Components,
}
