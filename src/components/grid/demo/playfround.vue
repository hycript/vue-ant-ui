<template>
    <div id="components-grid-demo-playground">
        <div style="marginBottom:16px">
            <span style="marginRight:6px">Gutter (px): </span>
            <div style="width:50%">
                <vSlider :min="0" :max="Object.keys(gutters).length - 1" v-model="gutterKey" :marks="this.gutters"
                    :step="null" />
            </div>
            <span style="marginRight:6px">Column Count:</span>
            <div style="width:50%">
                <vSlider :min="0" :max="Object.keys(colCounts).length - 1" v-model="colCountKey"
                    :marks="this.colCounts" :step="null" />
            </div>
        </div>
        <vRow :gutter="gutters[gutterKey]">
            <vCol v-for="item in colCounts[colCountKey]" :key="item.toString()"
                :span="24/colCounts[colCountKey]">
                <div>Column</div>
            </vCol>
        </vRow>
        <pre v-text="rowColHtml">
    </pre>
    </div>
</template>
<script>
export default {
    data() {
        const gutters = {}
        const arr = [8, 16, 24, 32, 40, 48]
        arr.forEach((value, i) => {
            gutters[i] = value;
        })
        const colCounts = {}
        const arr1 = [2, 3, 4, 6, 8, 12]
        arr1.forEach((value, i) => {
            colCounts[i] = value;
        })
        return {
            gutterKey: 1,
            colCountKey: 2,
            colCounts,
            gutters,
        }
    },
    computed: {
        rowColHtml() {
            const colCount = this.colCounts[this.colCountKey]
            const getter = this.gutters[this.gutterKey]
            let colCode = '<vRow :gutter="' + getter + '">\n'
            for (let i = 0; i < colCount; i++) {
                const spanNum = 24 / colCount
                colCode += '  <vCol :span="' + spanNum + '"/>\n'
            }
            colCode += '</vRow>'
            return colCode
        }
    },
}
</script>
<style scoped>
#components-grid-demo-playground [class^="ant-col-"] {
    background: transparent;
    border: 0;
}

#components-grid-demo-playground [class^="ant-col-"]>div {
    background: #00A0E9;
    height: 120px;
    line-height: 120px;
    font-size: 13px;
}

#components-grid-demo-playground pre {
    background: #f9f9f9;
    border-radius: 6px;
    font-size: 13px;
    padding: 8px 16px;
}
</style>
