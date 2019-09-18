<template>
<div style="background-color: #ececec; padding: 20px; margin: -1em;">
    <vRow :gutter="16">
        <vCol :span="8">
            <vCard title="Card title" :bordered=false>
                <p>card content</p>
            </vCard>
        </vCol>
        <vCol :span="8">
            <vCard title="Card title" :bordered=false>
                <p>card content</p>
            </vCard>
        </vCol>
        <vCol :span="8">
            <vCard title="Card title" :bordered=false>
                <p>card content</p>
            </vCard>
        </vCol>
    </vRow>
</div>
</template>
<style lang="less" scoped>
p{
    margin: 0;
    line-height: 1.5;
}
</style>
