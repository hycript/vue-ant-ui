<template>
<div>
    <ButtonGroup :style="{ marginBottom: '8px' }">
        <Button @click="size = 'small'">Small</Button>
        <Button @click="size = 'default'">Default</Button>
        <Button @click="size = 'large'">Large</Button>
    </ButtonGroup>
    <Tabs defaultActiveKey="2" :size="size">
        <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        <Tag slot="tabBarExtraContent">{{ size }}</Tag>
    </Tabs>
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
