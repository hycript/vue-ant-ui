<template>
<div>
    <vButtonGroup :style="{ marginBottom: '8px' }">
        <vButton @click="size = 'small'">Small</vButton>
        <vButton @click="size = 'default'">Default</vButton>
        <vButton @click="size = 'large'">Large</vButton>
    </vButtonGroup>
    <vTabs defaultActiveKey="2" :size="size">
        <vTabPane tab="Tab 1" key="1">Content of tab 1</vTabPane>
        <vTabPane tab="Tab 2" key="2">Content of tab 2</vTabPane>
        <vTabPane tab="Tab 3" key="3">Content of tab 3</vTabPane>
        <vTag slot="tabBarExtraContent">{{ size }}</vTag>
    </vTabs>
</div>
</template>
<script>
export default {
    data() {
        return {
            size: 'small'
        };
    }
};
</script>
