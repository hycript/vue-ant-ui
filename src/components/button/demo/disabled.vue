<template>
<div>
    <vButton type="primary">Primary</vButton>
    <vButton type="primary" disabled>Primary(disabled)</vButton>
    <br><br>
    <vButton>Default</vButton>
    <vButton disabled>Default(disabled)</vButton>
    <br><br>
    <vButton type="dashed">Dashed</vButton>
    <vButton type="dashed" disabled>Dashed(disabled)</vButton>
    <br><br>
    <vButton type="link">Link</vButton>
    <vButton type="link" disabled>Link(disabled)</vButton>
    <br><br>
    <div :style="{ padding: '1em', background: 'rgb(190, 200, 200)', margin: '0 -1em -1em', borderRadius: '6px' }">
        <vButton ghost>Ghost</vButton>
        <vButton ghost disabled>Ghost(disabled)</vButton>
    </div>
</div>
</template>
