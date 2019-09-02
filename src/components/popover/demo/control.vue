<template>
<div>
    <Popover title="Title" trigger="click" v-model="visible">
        <a @click="hide" slot="content">Close</a>
        <Button type="primary">Click me</Button>
    </Popover>
    <Popover title="Title" trigger="click">
        <a slot-scope="{ hide }" @click="hide()" slot="content">Close By slot-scope</a>
        <Button type="primary">Click me (slot-scope)</Button>
    </Popover>
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
