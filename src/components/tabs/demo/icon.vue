<template>
<div>
    <Tabs defaultActiveKey="2">
        <TabPane key="1">
            <span slot="tab">
                <Icon type="apple" />Tab 1
            </span>
            Tab 1
        </TabPane>
        <TabPane key="2" icon="android" tab="Tab 2">
            Tab 2
        </TabPane>
    </Tabs>
</div>
</template>
