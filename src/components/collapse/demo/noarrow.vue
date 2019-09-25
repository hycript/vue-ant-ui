<template>
<div>
    <vCollapse defaultActiveKey="1" @change="changeActivekey">
        <vCollapsePanel header="This is panel header with arrow icon" key="1">
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header with no arrow icon" key="2" :showArrow="false">
            <p>{{text}}</p>
        </vCollapsePanel>
    </vCollapse>
</div>
</template>
<script>
export default {
    data() {
        return {
            text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
        }
    },
    methods: {
        changeActivekey(key) {
            console.log(key)
        },
    },
}
</script>
