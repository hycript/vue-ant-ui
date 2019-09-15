<template>
<div>
    <vBadge status="success" />
    <vBadge status="error" />
    <vBadge status="default" />
    <vBadge status="processing" />
    <vBadge status="warning" />
    <br />
    <vBadge status="success" text="Success" />
    <br />
    <vBadge status="error" text="Error" />
    <br />
    <vBadge status="default" text="Default" />
    <br />
    <vBadge status="processing" text="Processing" />
    <br />
    <vBadge status="warning" text="warning" />
</div>
</template>
<style lang="less" scoped>
    .demo {
        ::v-deep .ant-badge {
            margin-right: 8px;
        }
    }

</style>
