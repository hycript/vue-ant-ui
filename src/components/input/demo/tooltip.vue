<template>
<div>
    <vTooltip placement="topLeft" :trigger="['focus']" v-model="visible" overlayClassName="numeric-input">
        <span slot="title" v-if="value" class="numeric-input-title">
            {{value !== '-' ? formatNumber(value) : '-'}}
        </span>
        <template slot="title" v-else>
            Input a number
        </template>
        <vInput :value="value" @change="onChange" @blur="onBlur" placeholder="Input a number" maxLength="25"
            style="width: 120px" allowClear/>
    </vTooltip>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            visible: false,
        }
    },
    methods: {
        formatNumber(value){
            if(!value) return value;
            const list = value.split('.');
            list[0] = list[0].replace(/(\d)(?=(\d{3})+$)/ig, '$1,');
            return list.join('.');
        },
        onChange(e) {
            const { value } = e.target
            const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
            if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
                this.value = value
            }
        },
        // '.' at the end or only '-' in the input box.
        onBlur() {
            const { value, onChange } = this
            if (value.charAt(value.length - 1) === '.' || value === '-') {
                onChange({
                    value: value.slice(0, -1)
                })
            }
        },
    },
}
</script>
<style>
    /* to prevent the arrow overflow the popup container,
or the height is not enough when content is empty */
.numeric-input .ant-tooltip-inner {
    min-width: 32px;
    min-height: 37px;
}

.numeric-input .numeric-input-title {
    font-size: 14px;
}
</style>
