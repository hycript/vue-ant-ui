<template>
<div>
    <vCollapse defaultActiveKey="1" :bordered="false">
        <vCollapsePanel key="1" :style="customStyle">
            <template slot="header">
                This is panel header 1
                <vIcon type="question-circle-o" />
            </template>
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 2" key="2" :style="customStyle">
            <p>{{text}}</p>
        </vCollapsePanel>
        <vCollapsePanel header="This is panel header 3" key="3" :style="customStyle">
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
            customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden'
        }
    },
}
</script>
