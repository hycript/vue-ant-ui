<template>
<div>
    <strong :style="{ marginRight: 8 }">Categories:</strong>
    <template v-for=" tag in tags">
        <vCheckableTag :key="tag" :checked="selectedTags.indexOf(tag) > -1"
            @change="(checked) => handleChange(tag, checked)">
            {{tag}}
        </vCheckableTag>
    </template>
</div>
</template>
<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            checked3: false,
            tags: ['Movies', 'Books', 'Music', 'Sports'],
            selectedTags: [],
        }
    },
    methods: {
        handleChange(tag, checked) {
            const {
                selectedTags
            } = this
            const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
            console.log('You are interested in: ', nextSelectedTags)
            this.selectedTags = nextSelectedTags
        },
    },
}
</script>
