<template>
<div>
    <h1>child</h1>
    <!-- <slot></slot> -->
    <div><Button @click="toggle">toggle slot</Button> <Button v-if="!visible" @click="toggle">has hidden</Button> </div>

    <!-- <vnode :vnodes="$slots.default" :class="['hello']" class="hoho" :style="{ lineHeight: 1 }" style="color:red;" @mouseenter="log"><div>1</div></vnode> -->
    <div style="height: 100px;">
        <vTransition>
            <vnode v-if="visible">
                <slot></slot>
            </vnode>
        </vTransition>
        <!-- {{ $slots.icon | log }} -->
        <vTransition>
            <vnode key="aaa" class="hi" v-if="visible" slot="default" :vnodes="$slots.icon">
                <!-- <slot name="icon"></slot> -->
                <!-- <Icon type="clock-circle" style="color: #f5222d" /> -->
            </vnode>
        </vTransition>
    </div>
</div>
</template>
<script>
import vnode from './vnode';
export default {
    components: {
        vnode,
    },
    data(){
        return {
            key: 'child',
            visible: true,
        }
    },
    props: ['a', 'b', 'c', 'animated'],
    filters: {
        log(value){
            console.error('filter::log', value);
            return '';
        }
    },
    mounted(){
        console.error('child', this, this.$scopedSlots);
    },
    updated(){
        console.error('child', this, this.$scopedSlots);
    },
    methods: {
        log(e){
            console.log('hello from vnode', e.type, this.key);
        },
        toggle(){
            this.visible = !this.visible;
        }
    }
}
</script>
