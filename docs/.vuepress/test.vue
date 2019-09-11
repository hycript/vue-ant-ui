<template>
<div class="test">
    <child :a="1" :b="2" animated d>
        <Icon slot="default" type="question-circle" style="color: #f5222d" />
        <Icon slot="icon" type="clock-circle" style="color: #f5222d" />
    </child>
    <hr>
    <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1
            <div slot="tab" type="clock-circle">1</div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        <Button slot="tabBarExtraContent">haha</Button>
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
            key: 'test'
        }
    },
    methods: {
        log(e){
            console.log(e.type, this.key);
        },
        log2(e){
            console.log('log2', e.type);
        }
    }
}
</script>
