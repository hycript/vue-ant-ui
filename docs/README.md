# Vue-Ant-UI

<basic />

<<< @/pages/tag/basic.vue

<template>
<Button @click="click">{{ text }}</Button>
<Button type="danger">Danger</Button>
<Button type="dashed">Dashed</Button>
<Button href="https://ant.design" type="dashed" >Goto Ant Design</Button>
</template>

<script>
import basic from './pages/tag/basic.vue'
export default {
    components: {
        basic,
    },
    data(){
        return {
            text: '按钮',
            powerLoading: false,
            slotText: true,
            transitionShow: false,
            align: {
                points: ['bc', 'tc'],

            }
        }
    },
    methods: {
        click(){
            this.text = this.text === '按钮' ? '反向按钮' : '按钮';
        },
        powerClick(){
            this.powerLoading = true;
        },
        changeSlot(){
            this.slotText = !this.slotText;
        },
        changeTransition(){
            this.transitionShow = !this.transitionShow;
        },
        getTarget(){
            console.log('this.$refs.alignTarget;', this.$refs.alignTarget);
            return this.$refs.alignTarget;
        }
    }
}
</script>

