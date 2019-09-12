<template>
<div class="test">
    <child :a="1" :b="2" animated d>
        <Icon slot="default" type="question-circle" style="color: #f5222d" />
        <Icon slot="icon" type="clock-circle" style="color: #f5222d" />
    </child>
    <hr>
    <Tabs defaultActiveKey="1" :tabPosition="tabPosition">
        <TabPane tab="Tab 1" key="1" :forceRender="true" a="hello" :c="true">Content of Tab Pane 1
            <div slot="tab" type="clock-circle">111</div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        <Button slot="tabBarExtraContent" @click="change">POS</Button>
    </Tabs>
</div>
</template>
<script>
import child from './child';
import Tabs from '~comps/tabs/tabs';
import TabPane from '~comps/tabs/lib/TabPane'
export default {
    components: {
        child,
        Tabs,
        TabPane,
    },
    data(){
        return {
            key: 'test',
            tabPosition: 'top',
        }
    },
    methods: {
        log(e){
            console.log(e.type, this.key);
        },
        log2(e){
            console.log('log2', e.type);
        },
        change(){
            let pos = ['top', 'right', 'bottom', 'left'];
            const { tabPosition } = this;
            let index = pos.indexOf(tabPosition);
            index = index + 1;
            if(index >= pos.length) index = 0;
            this.tabPosition = pos[index];
        }
    }
}
</script>
