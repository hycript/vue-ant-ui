<template>
<div>
    <vAlert message="Warning text" banner />
    <br />
    <vAlert
        message="Very long warning text warning text text text text text text text"
        banner
        closable
    />
    <br />
    <vAlert :showIcon="false" message="Warning text without icon" banner />
    <br />
    <vAlert type="error" message="Error text" banner />
</div>
</template>
