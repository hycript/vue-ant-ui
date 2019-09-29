<template>
<div>
    <div style="margin-bottom: 16px">
        <vInput addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <!-- <div style="margin-bottom: 16px">
        <vInput defaultValue="mysite">
            <vSelect slot="addonBefore" defaultValue="Http://" style="width: 90px">
                <vSelectOption value="Http://">Http://</vSelectOption>
                <vSelectOption value="Https://">Https://</vSelectOption>
            </vSelect>
            <vSelect slot="addonAfter" defaultValue=".com" style="width: 80px">
                <vSelectOption value=".com">.com</vSelectOption>
                <vSelectOption value=".jp">.jp</vSelectOption>
                <vSelectOption value=".cn">.cn</vSelectOption>
                <vSelectOption value=".org">.org</vSelectOption>
            </vSelect>
        </vInput>
    </div> -->
    <div style="margin-bottom: 16px">
        <vInput defaultValue="mysite">
            <vIcon slot="addonAfter" type="setting" />
        </vInput>
    </div>
</div>
</template>
