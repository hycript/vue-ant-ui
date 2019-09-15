<template>
<div>
    <vPopover title="Title" trigger="click" v-model="visible">
        <a @click="hide" slot="content">Close</a>
        <vButton type="primary">Click me</vButton>
    </vPopover>
    <vPopover title="Title" trigger="click">
        <a slot-scope="{ hide }" @click="hide()" slot="content">Close By slot-scope</a>
        <vButton type="primary">Click me (slot-scope)</vButton>
    </vPopover>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        hide() {
            this.visible = false
        },
    },
}
</script>
