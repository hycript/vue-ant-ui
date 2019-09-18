<template>
<div>
    <vSpin>
        <vIcon slot="indicator" type="loading" style="font-size: 24px" spin />
    </vSpin>
    <vSpin :indicator="indicator" />
</div>
</template>
<script>
export default {
    data() {
        return {
            indicator: <vIcon type="loading" style="font-size: 24px" spin />
        };
    }
};
</script>
