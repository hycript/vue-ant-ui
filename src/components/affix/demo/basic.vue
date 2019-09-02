<template>
<div>
    <Affix :offsetTop="this.top">
        <Button type="primary" @click="top += 10">Affix top {{ top }}px</Button>
    </Affix>
    <br />
    <Affix :offsetBottom="this.bottom">
        <Button type="primary" @click="bottom += 10">Affix bottom {{ bottom }}px</Button>
    </Affix>
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
