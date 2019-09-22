<style></style>
<template>
<div :class="prefixCls" :style="defaultStyles">
    <vTransitionGroup name="noticeTransition">
        <Notice v-for="notice in notices"
            v-bind="{ prefixCls: prefixCls, ...notice }"
            :key="notice.key" @click="notice.onClick(notice)" @close="() => { notice.onClose && notice.onClose(notice) ;this.remove(notice.key)}"
        >
            <vnode :vnodes="notice.content"></vnode>
            <template slot="closeIcon"><slot name="closeIcon"></slot></template>
        </Notice>
    </vTransitionGroup>
</div>
</template>
<script>
import PropTypes from '../_util/vue-types';
import Notice from './Notice';
import { TransitionGroup as vTransitionGroup } from '../transition'
import modal from '../common/modal';
import vnode from '../common/vnode';

let seed = 0;
const now = Date.now();

function getUuid() {
    return `Notification_${now}_${seed++}`;
}

const Notification = {
    name: 'Notification',
    components: {
        Notice,
        vTransitionGroup,
        vnode,
    },
    data(){
        return {
            notices: [],
        }
    },
    props: {
        prefixCls: PropTypes.string.def('ant-notification'),
        transitionName: PropTypes.string,
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).def('fade'),
        maxCount: PropTypes.number,
        // closeIcon: PropTypes.any,
    },
    computed: {
        defaultStyles(){
            const { $vnode } = this;
            return !($vnode.data.staticStyle || $vnode.data.style) && 'top: 65px; left: 50%';
        },
        noticeTransition(){
            const { prefixCls, transitionName, animation } = this;
            return transitionName || (animation && `${prefixCls}-${animation}`);
        }
    },
    methods: {
        add(notice){
            const key = (notice.key = notice.key || getUuid());
            const { maxCount } = this.$props;
            const index = this.notices.map(notice => notice.key).indexOf(key);
            if(index > -1){
                this.notices.splice(index, 1, notice);
            }
            this.notices.push(notice);
            if(maxCount && this.notices.length > maxCount){
                this.notices.shift();
            }
        },
        remove(key){
            const index = this.notices.map(notice => notice.key).indexOf(key);
            if(index > -1){
                this.notices.splice(index, 1);
            }
        },
    }
}

Notification.newInstance = function (properties, hook){
    const { getContainer, style, class: className, ...props } = properties || {};
    return modal({
        component: Notification,
        $options: {
            style,
            class: className,
            props,
        },
        ref: 'notification',
    }, ({ component, container, $root }) => {
        hook({
            notice(noticeProps) {
                component.add(noticeProps);
            },
            removeNotice(key) {
                component.remove(key);
            },
            component: $root,
            destroy() {
                $root.$destroy();
            },
        })
    })
}

export default Notification;
</script>
