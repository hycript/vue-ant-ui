<style lang="less" src="./style/index.less"></style>
<template>
<div :class="`${prefixCls}-meta`" v-on="$listeners">
    <div v-if="$slots.avatar" :class="`${prefixCls}-meta-avatar`">
        <slot name="avatar"></slot>
    </div>
    <component :is="hasDetail ? 'div' : 'vnode'" :class="hasDetail ? `${prefixCls}-meta-detail` : ''">
        <div v-if="$slots.title || title" :class="`${prefixCls}-meta-title`">
            <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="hasDetail" :class="`${prefixCls}-meta-description`">
            <slot name="description">{{ description }}</slot>
        </div>
    </component>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import events from '../common/events';
import vnode from '../common/vnode';

export default {
    name: 'CardMeta',
    components: {
        vnode,
    },
    props: {
        prefixCls: PropTypes.string.def('ant-card'),
        title: PropTypes.string,
        description: PropTypes.string,
    },
    computed: {
        hasDetail(){
            return this.$slots.description || this.description;
        }
    }
}
</script>
