<style lang="less" src="./style/index.less"></style>
<template>
<div :class="classes" v-on="$$listeners">
    <div v-if="hasHead" :class="`${prefixCls}-head`" :style="headStyle">
        <div :class="`${prefixCls}-head-wrapper`">
            <div v-if="$slots.title || title" :class="`${prefixCls}-head-title`">
                <slot name="title">{{ title }}</slot>
            </div>
            <div v-if="$slots.extra || extra" :class="`${prefixCls}-extra`">
                <slot name="extra">{{ extra }}</slot>
            </div>
        </div>
        <Tabs v-if="tabList && tabList.length"
            :class="`${prefixCls}-head-tabs`"
            size="large"
            :activeKey="activeTabKey"
            :defaultActiveTabKey="defaultActiveTabKey"
            @change="onTabChange"
        >
            <TabPane v-for="item in tabList" :key="item.key" v-bind="item">
                <template v-if="item.scopedSlots">
                    <template v-for="(slot, index) in item.scopedSlots">
                        <template v-if="$scopedSlots[slot]" :slot="index">
                            <slot :name="slot" v-bind="item"></slot>
                        </template>
                        <!-- <vnode v-if="$slots[slot]" :key="index" :slot="index" :vnodes="$slots[slot]"></!-->
                    </template>
                </template>
            </TabPane>
        </Tabs>
    </div>
    <div :class="`${prefixCls}-cover`" v-if="$slots.cover">
        <slot name="cover"></slot>
    </div>
    <div :class="`${prefixCls}-body`" :style="bodyStyle">
        <div v-if="loading" :class="`${prefixCls}-loading-content`" :style="loadingStyles">
            <Row v-for="(blocks, index) in loadingBlocks" :gutter="8" :key="index">
                <Col v-for="(span, sindex) in blocks" :span="span" :key="sindex">
                    <div :class="`${prefixCls}-loading-block`" />
                </Col>
            </Row>
        </div>
        <slot v-else></slot>
    </div>
    <ul v-if="slotActions && slotActions.length" :class="`${prefixCls}-actions`">
        <li v-for="(action, index) in slotActions" :key="index"  :style="{ width: `${100 / slotActions.length}%` }">
            <span><vnode :vnodes="action"></vnode></span>
        </li>
    </ul>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { is, filterEmpty } from '../_util/props-util';
import vnode from '../common/vnode';
import events from '../common/events';
import { Tabs, TabPane } from '../tabs';
import { Col, Row } from '../grid';

export default {
    name: 'Card',
    mixins: [events],
    exceptListeners: ['tabChange', 'tab-change'],
    components: {
        Tabs,
        TabPane,
        Col,
        Row,
        vnode,
    },
    data(){
        this.updateWiderPaddingCalled = false;
        this.loadingBlocks = [
            [22], [8, 15], [6, 18], [13, 9], [4, 3, 16], [8, 6, 8],
        ];
        return {
            widerPadding: false,
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-card'),
        title: PropTypes.any,
        extra: PropTypes.any,
        bordered: PropTypes.bool.def(true),
        bodyStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        headStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        loading: PropTypes.bool.def(false),
        hoverable: PropTypes.bool.def(false),
        type: PropTypes.string,
        actions: PropTypes.any,
        tabList: PropTypes.array,
        activeTabKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultActiveTabKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    },
    computed: {
        isContainGrid(){
            let isGrid = false;
            (this.$slots.default || []).forEach(vnode => {
                const { componentOptions } = vnode;
                if(!componentOptions || !componentOptions.Ctor) return;
                const { options = {} } = componentOptions.Ctor;
                const { name } = options;
                if(name === 'CardGrid'){
                    isGrid = true;
                    return false;
                }
            })
            return isGrid;
        },
        classes(){
            const { prefixCls, loading, bordered, hoverable, tabList, type, isContainGrid } = this;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-loading`]: loading,
                [`${prefixCls}-bordered`]: bordered,
                [`${prefixCls}-hoverable`]: !!hoverable,
                // [`${prefixCls}-wider-padding`]: this.widerPadding,
                // [`${prefixCls}-padding-transition`]: this.updateWiderPaddingCalled,
                [`${prefixCls}-contain-grid`]: isContainGrid,
                [`${prefixCls}-contain-tabs`]: tabList && tabList.length,
                [`${prefixCls}-type-${type}`]: !!type,
            };
        },
        loadingStyles(){
            const { bodyStyle } = this;
            if(is(bodyStyle, 'object') && (bodyStyle.padding === 0 || bodyStyle.padding === '0px')){
                return { padding: 24 }
            }
            return undefined;
        },
        hasHead(){
            const { title, extra, $slots, tabList = [] } = this;
            return !!title || !!extra || !!$slots.title || !!$slots.extra || (tabList && tabList.length);
        },
        slotActions(){
            const actions = filterEmpty(this.$slots.actions)
            return actions;
        },
    },
    methods: {
        onTabChange(key){
            this.$emit('tabChange', key);
        }
    }
}
</script>
