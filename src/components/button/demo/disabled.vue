<template>
<div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <br><br>
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br><br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
    <br><br>
    <Button type="link">Link</Button>
    <Button type="link" disabled>Link(disabled)</Button>
    <br><br>
    <div :style="{ padding: '1em', background: 'rgb(190, 200, 200)', margin: '0 -1em -1em', borderRadius: '6px' }">
        <Button ghost>Ghost</Button>
        <Button ghost disabled>Ghost(disabled)</Button>
    </div>
</div>
</template>
