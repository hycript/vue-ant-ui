<template>
    <div>
        <div>
            <vRadioGroup @change="onChange" v-model="value">
                <vRadioButton value="a">Hangzhou</vRadioButton>
                <vRadioButton value="b">Shanghai</vRadioButton>
                <vRadioButton value="c">Beijing</vRadioButton>
                <vRadioButton value="d">Chengdu</vRadioButton>
            </vRadioGroup>
        </div>
        <div :style="{ marginTop: '16px' }">
            <vRadioGroup @change="onChange" defaultValue="a">
                <vRadioButton value="a">Hangzhou</vRadioButton>
                <vRadioButton value="b" disabled>Shanghai</vRadioButton>
                <vRadioButton value="c">Beijing</vRadioButton>
                <vRadioButton value="d">Chengdu</vRadioButton>
            </vRadioGroup>
        </div>
        <div :style="{ marginTop: '16px' }">
            <vRadioGroup disabled @change="onChange" defaultValue="a">
                <vRadioButton value="a">Hangzhou</vRadioButton>
                <vRadioButton value="b">Shanghai</vRadioButton>
                <vRadioButton value="c">Beijing</vRadioButton>
                <vRadioButton value="d">Chengdu</vRadioButton>
            </vRadioGroup>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 'a'
        };
    },
    methods: {
        onChange(e) {
            console.log(`checked = ${e.target.value}`);
        }
    }
};
</script>
