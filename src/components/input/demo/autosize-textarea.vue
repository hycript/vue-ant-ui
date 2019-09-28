<template>
<div>
    <vTextarea placeholder="Autosize height based on content lines" autosize />
    <div style="margin: 24px 0" />
    <vTextarea placeholder="Autosize height with minimum and maximum number of lines"
        :autosize="{ minRows: 2, maxRows: 5 }" />
</div>
</template>
