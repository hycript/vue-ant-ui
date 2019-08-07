<style lang="less" scoped>
@import '../style/common.less';
.icon {
    border: 1px solid @borderColor;
    padding: 20px;
    margin: 10px;
    font-size: 2rem;
}
.ant-btn {
    margin: 4px 6px;
}
.ant-btn-group {
    margin: 4px 6px;
    & > .ant-btn {
        margin: 0;
    }
}

.demo-div {
    width: 300px;
    height: 200px;
    background: @fontActive;
    // display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    display: block;
}
</style>
<template>
<Page title="Button 按钮">
    <Box>
        <Button @click="click">{{ text }}</Button>
        <Button type="primary" @click="changeSlot">
            <template v-if="slotText">Primay</template>
            <span class="Primary-span" v-else>
                Primay Span
            </span>
        </Button>
        <Button type="danger">Danger</Button>
        <Button type="dashed">Dashed</Button>
        <Button href="https://ant.design" type="dashed" >Goto Ant Design</Button>
    </Box>
    <Box>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
    </Box>
    <Box>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">Search</Button>
    </Box>
    <Box>
        <Button type="primary" loading>
            Loading Primary
        </Button>
        <Button type="primary" size="small" loading>
            Loading
        </Button>
        <br />
        <Button type="primary" :loading="true">
            Click me!
        </Button>
        <Button type="primary" icon="poweroff" @click="powerClick" :loading="powerLoading">
            Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
    </Box>
    <Box :style="{ background: 'rgb(190, 200, 200)' }">
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="danger" ghost>danger</Button>
    </Box>
    <Box>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(disabled)</Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
        <div :style="{ padding: '8px', background: 'rgb(190, 200, 200)' }">
            <Button ghost>Ghost</Button>
            <Button ghost disabled>Ghost(disabled)</Button>
        </div>
    </Box>
    <Box>
        <ButtonGroup size="large">
            <Button type="primary">
                <Icon type="left" />Backward
            </Button>
            <Button type="primary">
                Forward<Icon type="right" />
            </Button>
        </ButtonGroup>
    </Box>
    <Box :style="{ 'min-height': '400px' }">
        <p class="title">Transition Test</p>
        <Button v-on="listeners">listeners</Button>
        <Button type="primary" @click="changeTransition">{{ transitionShow ? 'hide' : 'show'}}</Button>
        <vTransition>
            <div class="demo-div" v-if="transitionShow">Transition Button</div>
        </vTransition>
        <dynamicConpnent>
            <template v-if="transitionShow">
                <Button type="primary" @click="changeTransition">HIDE</Button>
            </template>
            <template v-else>
                <Button type="primary" @click="changeTransition">SHOW</Button>
            </template>
        </dynamicConpnent>
    </Box>
    <Box :style="{position: 'relative'}">
        <p class="title">Align Test</p>
        <div ref="alignTarget" :style="{ width: '300px', height: '300px', background: 'red' }"></div>
        <vTransition transitionName="fade">
            <Align v-if="transitionShow" :target="getTarget" :align="align" :monitorWindowResize="true">
                <div ref="sourceTarget" :style="{ position: 'absolute', display: 'inline-block' }">
                        <div class="" :style="{ width: '100px', height: '100px', background: 'blue' }"></div>
                </div>
            </Align>
        </vTransition>
    </Box>
</Page>
</template>
<script>
import Page from './common/page';
import Box from './common/box';

import dynamicConpnent from '../../components/common/dynamicComponent.js';
import Align from '../../components/common/align.js';

export default {
    components: {
        Page,
        Box,
        dynamicConpnent,
        Align,
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
    created(){
        this.listeners = {
            click: this.changeTransition,
            mouseenter: this.changeTransition,
        }
    },
    watch: {
        transitionShow(){
            /* const arr1 = ['t', 'c', 'b'];
            const arr2 = ['l', 'c', 'r'];
            const p1 = arr1[Math.floor(Math.random() * 3)] + arr2[Math.floor(Math.random() * 3)];
            const p2 = arr1[Math.floor(Math.random() * 3)] + arr2[Math.floor(Math.random() * 3)];
            this.align = {
                points: [p1, p2],
            } */
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
