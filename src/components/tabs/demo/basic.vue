<template>
<div>
    <vTabs defaultActiveKey="1" @change="callback">
        <vTabPane tab="Tab 1" key="1">Content of Tab Pane 1</vTabPane>
        <vTabPane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</vTabPane>
        <vTabPane tab="Tab 3" key="3">Content of Tab Pane 3</vTabPane>
    </vTabs>
</div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        callback(key) {
            console.log(key);
        }
    }
};
</script>
