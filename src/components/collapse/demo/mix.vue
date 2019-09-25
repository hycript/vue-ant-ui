<template>
<div>
    <vCollapse @change="changeActivekey">
        <vCollapsePanel header="This is panel header 1" key="1">
            <vCollapse defaultActiveKey="4">
                <vCollapsePanel header="This is panel nest panel" key="4">
                    <p>{{text}}</p>
                </vCollapsePanel>
            </vCollapse>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 2" key="2" :disabled='false'>
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 3" key="3">
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
