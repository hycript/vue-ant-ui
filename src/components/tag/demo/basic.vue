<template>
<div>
    <vTag>Tag 1</vTag>
    <vTag>
        <a href="https://github.com/vueComponent/ant-design">Link</a>
    </vTag>
    <vTag closable @close="log">Tag 2</vTag>
    <vTag closable @close="preventDefault">Prevent Default</vTag>
</div>
</template>
<script>
export default {
    methods: {
        log(e) {
            console.log(e);
        },
        preventDefault(e) {
            e.preventDefault();
            console.log('Clicked! But prevent default.');
        }
    }
};
</script>
