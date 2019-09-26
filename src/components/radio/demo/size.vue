<template>
<div>
    <div>
        <vRadioGroup defaultValue="a" size="large">
            <vRadioButton value="a">Hangzhou</vRadioButton>
            <vRadioButton value="b">Shanghai</vRadioButton>
            <vRadioButton value="c">Beijing</vRadioButton>
            <vRadioButton value="d">Chengdu</vRadioButton>
        </vRadioGroup>
    </div>
    <div :style="{ marginTop: '16px' }">
        <vRadioGroup defaultValue="a">
            <vRadioButton value="a">Hangzhou</vRadioButton>
            <vRadioButton value="b">Shanghai</vRadioButton>
            <vRadioButton value="c">Beijing</vRadioButton>
            <vRadioButton value="d">Chengdu</vRadioButton>
        </vRadioGroup>
    </div>
    <div :style="{ marginTop: '16px' }">
        <vRadioGroup defaultValue="a" size="small">
            <vRadioButton value="a">Hangzhou</vRadioButton>
            <vRadioButton value="b">Shanghai</vRadioButton>
            <vRadioButton value="c">Beijing</vRadioButton>
            <vRadioButton value="d">Chengdu</vRadioButton>
        </vRadioGroup>
    </div>
</div>
</template>
