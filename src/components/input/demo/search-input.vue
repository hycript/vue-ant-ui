<template>
    <div>
        <vInputSearch placeholder="input search text" style="width: 200px" @search="onSearch" />
        <br /><br />
        <vInputSearch placeholder="input search text" @search="onSearch" enterButton />
        <br /><br />
        <vInputSearch placeholder="input search text" @search="onSearch" enterButton="Search" size="large" />
        <br /><br />
        <vInputSearch placeholder="input search text" @search="onSearch" size="large">
            <vButton slot="enterButton">Custom</vButton>
        </vInputSearch>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: '1',
        }
    },
    methods: {
        onSearch(value) {
            console.log('onSearch', value)
        },
    },
}
</script>
