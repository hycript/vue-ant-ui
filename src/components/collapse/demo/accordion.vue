<template>
<div>
    <vCollapse accordion>
        <vCollapsePanel v-for="item in list" :header="item.header" :key="item.key">
            <p>{{item.text}}</p>
        </vCollapsePanel>
    </vCollapse>
    <br>
    <vButton @click="addPanel">Add Panel</vButton><vButton @click="removePanel">Remove Panel</vButton>
</div>
</template>
<script>
export default {
    data() {
        return {
            text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
            list: [
                { header: 'This is panel header 1', key: '1', text: 'This is panel content 1' },
                { header: 'This is panel header 2', key: '2', text: 'This is panel content 2' },
                { header: 'This is panel header 3', key: '3', text: 'This is panel content 3' },
            ]
        }
    },
    methods: {
        addPanel(){
            const { length } = this.list;
            this.list.push({
                header: `This is panel header ${length + 1}`, key: `${length + 1}`, text: `This is panel content ${length + 1}`
            })
        },
        removePanel(){
            this.list.pop();
        }
    }
}
</script>
