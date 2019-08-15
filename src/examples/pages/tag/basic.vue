<template>
    <Box>
        <p class="title">基本用法</p>
        <p>基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 <code>onClose</code> <code>afterClose</code> 两个事件。</p>
        <Tag>Tag 1</Tag>
        <Tag><a href="https://github.com/vueComponent/ant-design">Link</a></Tag>
        <Tag closable @close="log">Tag 2</Tag>
        <Tag closable @close="preventDefault">Prevent Default</Tag>
    </Box>
</template>
<script>
    export default {
        methods: {
            log(e) {
                console.log(e)
            },
            preventDefault(e) {
                e.preventDefault()
                console.log('Clicked! But prevent default.')
            },
        },
    }
</script>
