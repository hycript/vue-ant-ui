<template>
<Affix :offsetTop="120" @change="change">
    <Button>120px to affix top</Button>
</Affix>
</template>
<script>
export default {
    methods: {
        change(affixed) {
            console.log(affixed);
        }
    }
};
</script>
