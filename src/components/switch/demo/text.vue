<template>
<div>
    <vSwitch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br>
    <vSwitch checkedChildren="1" unCheckedChildren="0" />
    <br>
    <vSwitch defaultChecked>
        <vIcon type="check" slot="checkedChildren" />
        <vIcon type="close" slot="unCheckedChildren" />
    </vSwitch>
</div>
</template>
