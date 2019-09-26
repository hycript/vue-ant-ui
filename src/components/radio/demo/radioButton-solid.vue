<template>
<div>
    <div>
        <vRadioGroup defaultValue="a" buttonStyle="solid">
            <vRadioButton value="a">Hangzhou</vRadioButton>
            <vRadioButton value="b">Shanghai</vRadioButton>
            <vRadioButton value="c">Beijing</vRadioButton>
            <vRadioButton value="d">Chengdu</vRadioButton>
        </vRadioGroup>
    </div>
    <div :style="{ marginTop: '16px' }">
        <vRadioGroup defaultValue="c" buttonStyle="solid">
            <vRadioButton value="a">Hangzhou</vRadioButton>
            <vRadioButton value="b" disabled>Shanghai</vRadioButton>
            <vRadioButton value="c">Beijing</vRadioButton>
            <vRadioButton value="d">Chengdu</vRadioButton>
        </vRadioGroup>
    </div>
</div>
</template>
