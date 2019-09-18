<template>
<vCard title="Card title">
    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
        Group title
    </p>
    <vCard title="Inner card title">
        <a href="#" slot="extra">More</a>
        Inner Card content
    </vCard>
    <vCard title="Inner card title" :style="{ marginTop: '16px' }">
        <a href="#" slot="extra">More</a>
        Inner Card content
    </vCard>
</vCard>
</template>
