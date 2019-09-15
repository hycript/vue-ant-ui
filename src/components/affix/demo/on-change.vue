<template>
<vAffix :offsetTop="120" @change="change">
    <vButton>120px to affix top</vButton>
</vAffix>
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
