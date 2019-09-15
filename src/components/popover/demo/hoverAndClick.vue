<template>
    <vPopover title="Hover title" trigger="hover" v-model="hovered" @visibleChange="handleHoverChange">
        <div slot="content">This is hover content.</div>
        <vPopover title="Click title" trigger="click" v-model="clicked" @visibleChange="handleClickChange">
            <div slot="content">
                <div>This is click content.</div>
                <a @click="hide">Close</a>
            </div>
            <vButton>Hover and click / 悬停并单击</vButton>
        </vPopover>
    </vPopover>
</template>
<script>
export default {
    data() {
        return {
            clicked: false,
            hovered: false,
        }
    },
    methods: {
        hide() {
            this.clicked = false
            this.hovered = false
        },
        handleHoverChange(visible) {
            if(visible) this.clicked = false
        },
        handleClickChange(visible) {
            if(visible) this.hovered = false
        },
    },
}
</script>
