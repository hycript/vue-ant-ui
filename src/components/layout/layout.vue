<script>
import PropTypes from '../_util/vue-types';
import Basic from './basic';

export default {
    name: 'Layout',
    extends: Basic,
    data(){
        return {
            siders: [],
        }
    },
    provide(){
        return {
            siderHook: {
                addSider: (id) => {
                    this.siders = [...this.siders, id]
                },
                removeSider: (id) => {
                    this.siders = this.siders.filter(currentId => currentId !== id)
                },
            }
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-layout'),
    },
    computed: {
        classes(){
            const { prefixCls, hasSider } = this;

            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-has-sider`]: hasSider || this.siders.length > 0,
            }
        },
    },
    methods: {

    }
}
</script>
