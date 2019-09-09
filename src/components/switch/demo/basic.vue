<template>
<div>
    <vSwitch defaultChecked @change='onChange' />
</div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        onChange(checked) {
            console.log(`a-switch to ${checked}`);
        }
    },
}
</script>
