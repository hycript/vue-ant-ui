<template>
<div>
    <vAffix :offsetTop="this.top">
        <vButton type="primary" @click="top += 10">Affix top {{ top }}px</vButton>
    </vAffix>
    <br />
    <vAffix :offsetBottom="this.bottom">
        <vButton type="primary" @click="bottom += 10">Affix bottom {{ bottom }}px</vButton>
    </vAffix>
</div>
</template>

<script>
export default {
    data() {
        return {
            top: 60,
            bottom: 100
        };
    }
};
</script>
