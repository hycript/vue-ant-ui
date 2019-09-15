<template>
<div>
    <Tabs defaultActiveKey="1" @change="callback">
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
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
