<template>
<div>
    <span style="margin-right:24px">
        <Badge :count="1">
            <Avatar shape="square" icon="user" />
        </Badge>
    </span>
    <span>
        <Badge dot>
            <Avatar shape="square" icon="user" />
        </Badge>
    </span>
</div>
</template>
<script>
import Badge from '../../badge/badge';
export default {
    components: {
        Badge,
    }
}
</script>
