<template>
<div>
    <vButtonGroup style="margin:8px">
        <vButton @click="tabPosition = 'top'">top</vButton>
        <vButton @click="tabPosition = 'bottom'">bottom</vButton>
        <vButton @click="tabPosition = 'left'">left</vButton>
        <vButton @click="tabPosition = 'right'">right</vButton>
    </vButtonGroup>
    <vTabs defaultActiveKey="1" :tabPosition="tabPosition">
        <vTabPane tab="Tab 1" key="1">Content of Tab 1</vTabPane>
        <vTabPane tab="Tab 2" key="2">Content of Tab 2</vTabPane>
        <vTabPane tab="Tab 3" key="3">Content of Tab 3</vTabPane>
    </vTabs>
</div>
</template>
<script>
export default {
    data() {
        return {
            tabPosition: 'top'
        };
    },
    methods: {
        callback(val) {
            console.log(val);
        }
    }
};
</script>
