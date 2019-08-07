import './components/style/index.less';

// general
import Button from './components/button';
import Icon from './components/icon';
import Transition from './components/transition';

//layout
import Grid from './components/grid';
import Layout from './components/layout';

//navigation
import Affix from './components/affix';

//Data Display
import Popover from './components/popover';
import Tooltip from './components/tooltip';

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
    //Data Display
    ...Popover,
    ...Tooltip,
    //Feedback
    ...Popconfirm,
}

function install(Vue){
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    })
}

export default {
    install,
}
