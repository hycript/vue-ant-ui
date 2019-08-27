<template>
<div>
    <template v-for="(tag, index) in tags">
        <Tooltip v-if="tag.length > 20" :key="tag" :title="tag">
            <Tag :key="tag" :closable="index !== 0" @afterClose="() => handleClose(tag)">
                {{`${tag.slice(0, 20)}...`}}
            </Tag>
        </Tooltip>
        <Tag v-else :key="tag" :closable="index !== 0" @afterClose="() => handleClose(tag)">
            {{tag}}
        </Tag>
    </template>
</div>
</template>
<script>
export default {
    data() {
        return {
            tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
            inputVisible: false,
            inputValue: '',
        }
    },
    methods: {
        handleClose(removedTag) {
            const tags = this.tags.filter(tag => tag !== removedTag)
            console.log(tags)
            this.tags = tags
        },
    },
}
</script>
