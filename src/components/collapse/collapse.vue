<style lang="less" src="./style/index.less"></style>
<template>
<div v-show="$slots.default" :class="classes" :role="accordion ? 'tablist' : null">
    <vnode v-bind="{ prefixCls, destroyInactivePanel, accordion, activeKey: selfActiveKey }" @itemClick="onClickItem">
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
            selfActiveKey: toArray(this.activeKey || this.defaultActiveKey),
            // panels: [],
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
        },
    },
    watch: {
        /* '$slots.default': {
            handler(val){
                this.handlePanels(this.panels);
            },
            immediate: true,
        }, */
        activeKey(val){
            this.selfActiveKey = toArray(val);
        },
    },
    created(){
        this.checkActiveKey();
    },
    beforeUpdate () {
        // console.log('beforeupdate');
        this.checkActiveKey();
    },
    beforeDestroy(){
        this.panels = null;
    },
    methods: {
        getPanels(){
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
            return panels;
        },
        onClickItem(key){
            const { selfActiveKey, accordion } = this;
            const activeKey = selfActiveKey.concat();
            if (accordion) {
                let target;
                if(activeKey.length > 0){
                    target = activeKey.splice(0, 1);
                }

                if(!target || target[0] !== key){
                    activeKey.push(key);
                }
            } else {
                const index = activeKey.indexOf(key);
                if(index > -1){
                    activeKey.splice(index, 1);
                }else{
                    activeKey.push(key);
                }
            }
            this.updateKey(activeKey);
        },
        checkActiveKey(){
            const { selfActiveKey } = this;

            const panels = this.getPanels();
            const{ panels: prevPanels } = this;

            if((!prevPanels || prevPanels.length === 0) && this.selfActiveKey.length === 0){
                let enables = panels.filter(panel => {
                    return !(panel.disabled || panel.disabled === '')
                });
                if(enables.length > 0){
                    this.onClickItem(enables[0].key)
                }
                return;
            }

            this.panels = panels;

            const keys = panels.map(panel => panel.key);

            const activeKey = selfActiveKey.concat();

            if(!activeKey.length) return;

            for(let i = 0; i < activeKey.length; i++){
                let key = activeKey[i];
                if(keys.indexOf(key) === -1){
                    activeKey.splice(i, 1);
                    i --;
                }
            }

            if(activeKey.length === selfActiveKey.length) return;

            this.updateKey(activeKey);
        },
        updateKey(activeKey){
            const { accordion } = this;
            /* if(!hasProp(this, 'activeKey')){
                this.selfActiveKey = activeKey;
            } */
            this.selfActiveKey = activeKey;
            this.$emit('change', accordion ? activeKey[0] : activeKey);
        }
    }
}
</script>
