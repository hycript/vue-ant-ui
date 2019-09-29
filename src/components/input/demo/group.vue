<template>
    <div>
        <vInputGroup size="large">
            <vCol :span="5">
                <vInput defaultValue="0571" />
            </vCol>
            <vCol :span="8">
                <vInput defaultValue="26888888" />
            </vCol>
        </vInputGroup>
        <br />
        <vInputGroup compact>
            <vInput style="width: 20%" defaultValue="0571" />
            <vInput style="width: 30%" defaultValue="26888888" />
        </vInputGroup>
        <br />
        <!-- <vInputGroup compact>
            <vSelect defaultValue="Zhejiang">
                <vSelectOption value="Zhejiang">Zhejiang</vSelectOption>
                <vSelectOption value="Jiangsu">Jiangsu</vSelectOption>
            </vSelect>
            <vInput style="width: 50%" defaultValue="Xihu District, Hangzhou" />
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vSelect defaultValue="Option1">
                <vSelectOption value="Option1">Option1</vSelectOption>
                <vSelectOption value="Option2">Option2</vSelectOption>
            </vSelect>
            <vInput style="width: 50%" defaultValue="input content" />
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vInput style="width: 50%" defaultValue="input content" />
            <vDatePicker />
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vSelect defaultValue="Option1-1">
                <vSelectOption value="Option1-1">Option1-1</vSelectOption>
                <vSelectOption value="Option1-2">Option1-2</vSelectOption>
            </vSelect>
            <vSelect defaultValue="Option2-2">
                <vSelectOption value="Option2-1">Option2-1</vSelectOption>
                <vSelectOption value="Option2-2">Option2-2</vSelectOption>
            </vSelect>
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vSelect defaultValue="1">
                <vSelectOption value="1">Between</vSelectOption>
                <vSelectOption value="2">Except</vSelectOption>
            </vSelect>
            <vInput style=" width: 100px; text-align: center" placeholder="Minimum" />
            <vInput style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff" placeholder="~"
                disabled />
            <vInput style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vSelect defaultValue="Sign Up">
                <vSelectOption value="Sign Up">Sign Up</vSelectOption>
                <vSelectOption value="Sign In">Sign In</vSelectOption>
            </vSelect>
            <vAutoComplete :dataSource="dataSource" style="width: 200px" @change="handleChange" placeholder="Email" />
        </vInputGroup>
        <br /> -->
        <!-- <vInputGroup compact>
            <vSelect style="width: 30%" defaultValue="Home">
                <vSelectOption value="Home">Home</vSelectOption>
                <vSelectOption value="Company">Company</vSelectOption>
            </vSelect>
            <vCascader style="width: 70%" :options="options" placeholder="Select Address" />
        </vInputGroup> -->
    </div>
</template>
<script>
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
export default {
    data() {
        return {
            options,
            dataSource: [],
        }
    },
    methods: {
        handleChange(value) {
            this.dataSource = !value || value.indexOf('@') >= 0 ? [] : [
                `${value}@gmail.com`,
                `${value}@163.com`,
                `${value}@qq.com`,
            ];
        }
    }
}
</script>
