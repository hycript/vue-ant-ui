<template>
<div class="test">
    <!-- <child :a="1" :b="2" animated d>
        <Icon slot="default" type="question-circle" style="color: #f5222d" />
        <Icon slot="icon" type="clock-circle" style="color: #f5222d" />
    </child> -->
    <vButton slot="tabBarExtraContent" @click="change">POS</vButton>
    <hr> <!--  type="editable-card" style="height: 220px;"-->
    <vTabs defaultActiveKey="1" type="editable-card" :hideAdd="true" :tabPosition="tabPosition" style="height: 220px;">
        <vTabPane tab="Tab 1" key="1" :forceRender="true">
            Content of Tab Pane 1
            <template v-if="tabPosition === 'top'" slot="tab" >
                <div type="clock-circle">
                    <span>111</span>
                </div>
            </template>
        </vTabPane>
        <vTabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</vTabPane>
        <vTabPane tab="Tab 3" key="3">Content of Tab Pane 3</vTabPane>
        <vTabPane tab="Tab 4 Tab 4" key="4">Content of Tab Pane 4</vTabPane>
        <vTabPane tab="Tab 5" key="5">Content of Tab Pane 5</vTabPane>
        <vTabPane tab="Tab 6" key="6">Content of Tab Pane 6</vTabPane>
        <vTabPane tab="Tab 7" key="7">Content of Tab Pane 7</vTabPane>
        <vTabPane tab="Tab 8" key="8">Content of Tab Pane 8</vTabPane>
        <vTabPane tab="Tab 9" key="9">Content of Tab Pane 9</vTabPane>
        <vTabPane tab="Tab 10" key="10">Content of Tab Pane 10</vTabPane>
    </vTabs>
</div>
</template>
<script>
import child from './child';
export default {
    components: {
        child,
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
