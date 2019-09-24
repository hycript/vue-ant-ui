<template>
<div>
    <vCollapse v-model="activeKey">
        <vCollapsePanel header="This is panel header 1" key="1">
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 2" key="2" :disabled="false">
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 3" key="3" disabled>
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
            activeKey: ['1']
        };
    },
    watch: {
        activeKey(key) {
            console.log(key);
        }
    }
};
</script>
