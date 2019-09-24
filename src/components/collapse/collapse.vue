<style lang="less" src="./style/index.less"></style>
<template>
<div :calss="classes"  role="accordion ? 'tablist' : null">
    <vnode :propGenerator="generatorPanelProps" @itemClick="onClickItem">
        <slot></slot>
    </vnode>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import { hasProp, is } from '../_util/props-util';
import vnode from '../common/vnode';

function toArray(val){
    return val === undefined || val === null ? [] : Array.isArray(val) ? val : [val];
}

export default {
    name: 'Collapse',
    components: {
        vnode,
    },
    model: {
        prop: 'activeKey',
        event: 'change',
    },
    data(){
        return {
            selfActiveKey: this.activeKey || this.defaultActiveKey,
            panels: [],
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-collapse'),
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        accordion: PropTypes.bool,
        destroyInactivePanel: PropTypes.bool,
        bordered: PropTypes.bool.def(true),
        // expandIcon: PropTypes.func,
        // openAnimation: PropTypes.object,
    },
    computed: {
        classes(){
            const { prefixCls, bordered } = this;
            return {
                [prefixCls]: true,
                [`${prefixCls}-borderless`]: !bordered,
            }
        }
    },
    watch: {
        '$slots.default': {
            handler(val){
                this.handlePanels();
            },
            immediate: true,
        },
        activeKey(val){
            this.selfActiveKey = val === undefined || val === null ? [] : Array.isArray(val) ? val : [val];
        }
    },
    beforeUpdate () {
        this.handlePanels();
    },
    methods: {
        handlePanels(){
            let panels = [];
            const collapsePanels = this.$slots.default || [];

            collapsePanels.forEach(pane => {
                if(!pane.tag || !pane.data) return;
                const { componentOptions, data } = pane;
                const { key } = data; //pane.key
                const { propsData } = componentOptions;
                const { disabled } = propsData;

                panels.push({
                    key,
                    disabled,
                })
            })
            this.panels = panels;
            /* if(this.selfActiveKey === undefined){
                let enables = panels.filter(panel => {
                    return !(panel.disabled || panel.disabled === '')
                });
                if(enables.length > 0){
                    this.onTabClick(enables[0].key)
                }
            } */
        },
        generatorPanelProps(){
            const { selfActiveKey: activeKey, destroyInactiveTabPane, prefixCls, accordion } = this;
            // console.error('vnode isActive', vnode.key, activeKey, activeKey === vnode.key)
            return {
                destroyInactiveTabPane,
                activeKey,
                prefixCls,
                accordion,
            }
        },
        onClickItem(key){
            const { selfActiveKey, accordion } = this;
            const activeKey = selfActiveKey.concat();
            if (accordion) {
                let target
                if(activeKey.length > 0){
                    target = activeKey.splice(0, 1);
                }
                target !== key && activeKey.push(key);
            } else {
                const index = activeKey.indexOf(key);
                if(index > -1){
                    activeKey.push(key);
                }else{
                    activeKey.splice(index, 1);
                }
            }
            if(!hasProp(this, 'activeKey')){
                this.selfActiveKey = activeKey;
            }
            this.$emit('change', accordion ? activeKey[0] : activeKey);
        }
    }
}
</script>
