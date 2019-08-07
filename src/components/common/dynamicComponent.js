import PropTypes from '~utils/vue-types';

export default {
    functional: true,
    props: {
        show: PropTypes.bool.def(true),
    },
    render(h, context){
        console.log('render', context);
        const { show } = context.props;
        return show ? h('div', context.children) : null;
    }
}
