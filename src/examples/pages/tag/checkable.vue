<template>
    <Box>
        <p class="title">可选择</p>
        <p>可通过 CheckableTag 实现类似 Checkbox 的效果，点击切换选中效果。</p>
        <blockquote>
            <p>
                该组件为完全受控组件，不支持非受控用法。
            </p>
        </blockquote>
        <div>
            <CheckableTag v-model="checked1" @change="handleChange">Tag1</CheckableTag>
            <CheckableTag v-model="checked2" @change="handleChange">Tag2</CheckableTag>
            <CheckableTag v-model="checked3" @change="handleChange">Tag3</CheckableTag>
        </div>
    </Box>
</template>
<script>
import Box from '../common/box';

export default {
    components: {
        Box,
    },
    data() {
        return {
            checked1: false,
            checked2: false,
            checked3: false,
        }
    },
    methods: {
        handleChange(checked) {
            console.log(checked)
        },
    },
}
</script>
