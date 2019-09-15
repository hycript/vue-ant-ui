<template>
<div>
    <vButtonGroup :style="{ marginBottom: '8px' }">
        <vButton value="top" @click="mode = 'top'">Horizontal</vButton>
        <vButton value="left" @click="mode = 'left'">Vertical</vButton>
    </vButtonGroup>
    <vTabs
        defaultActiveKey="1"
        :tabPosition="mode"
        :style="{ height: '260px'}"
        @prevClick="callback"
        @nextClick="callback"
    >
        <vTabPane tab="Tab 1" key="1">Content of tab 1</vTabPane>
        <vTabPane tab="Tab 2" key="2">Content of tab 2</vTabPane>
        <vTabPane tab="Tab 3" key="3">Content of tab 3</vTabPane>
        <vTabPane tab="Tab 4" key="4">Content of tab 4</vTabPane>
        <vTabPane tab="Tab 5" key="5">Content of tab 5</vTabPane>
        <vTabPane tab="Tab 6" key="6">Content of tab 6</vTabPane>
        <vTabPane tab="Tab 7" key="7">Content of tab 7</vTabPane>
        <vTabPane tab="Tab 8" key="8">Content of tab 8</vTabPane>
        <vTabPane tab="Tab 9" key="9">Content of tab 9</vTabPane>
        <vTabPane tab="Tab 10" key="10">Content of tab 10</vTabPane>
        <vTabPane tab="Tab 11" key="11">Content of tab 11</vTabPane>
    </vTabs>
</div>
</template>
<script>
export default {
    data() {
        return {
            mode: 'top'
        };
    },
    methods: {
        callback(val) {
            console.log(val);
        }
    }
};
</script>
