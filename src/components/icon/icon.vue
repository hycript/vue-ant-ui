<style lang="less">
@import '../style/index.less';
</style>
<template>
<i :class="classes" v-on="$$listeners"></i>
</template>
<script>
import PropTypes from '~utils/vue-types';
import events from '../common/events';

export default {
    name: 'Icon',
    mixins: [events],
    props: {
        type: PropTypes.string.isRequired,
        spin: PropTypes.bool.def(false),
    },
    computed: {
        classes(){
            const { type, spin } = this;
            return {
                anticon: true,
                'anticon-spin': !!spin || type === 'loading',
                [`anticon-${type}`]: true,
            };
        }
    },
}
</script>
