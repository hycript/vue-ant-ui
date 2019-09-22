import './components/style/index.less';
//directive
import directive from './components/_util/directive';

// general
import Icon from './components/icon';
import Button from './components/button';
import Transition from './components/transition';

//layout
import { Col, Row } from './components/grid';
import { Layout, Header, Footer, Content, Sider } from './components/layout';

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
import Alert from './components/alert';
import Popconfirm from './components/popconfirm';
import Spin from './components/spin';

const components = {
    //general
    Icon,
    Button,
    ButtonGroup: Button.Group,
    Transition,
    TransitionGroup: Transition.Group,

    //layout
    //- Grid-0
    Col,
    Row,
    //- Grid-1
    //- Layout-0
    Layout,
    Header,
    Footer,
    Content,
    Sider,
    //- Layout-1

    //navigation
    Affix,

    //Data Entry
    Switch,

    //Data Display
    Avatar,
    Badge,
    //- Card-0
    Card,
    CardMeta: Card.Meta,
    CardGrid: Card.Grid,
    //- Card-1
    Popover,
    Tooltip,
    Tabs,
    TabPane: Tabs.TabPane,
    Tag,
    CheckableTag: Tag.CheckableTag,

    //Feedback
    Alert,
    Popconfirm,
    Spin,
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

    //general
    Icon,
    Button,
    Transition,

    //layout
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Content,
    Sider,

    //navigation
    Affix,

    //Data Entry
    Switch,

    //Data Display
    Avatar,
    Badge,
    Card,
    Popover,
    Tooltip,
    Tabs,
    Tag,

    //Feedback
    Alert,
    Popconfirm,
    Spin,
}
