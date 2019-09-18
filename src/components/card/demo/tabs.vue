<template>
<div>
    <vCard style="width:100%" title="Card title" :tabList="tabList" :activeTabKey="key"
        @tabChange="key => onTabChange(key, 'key')">
        <span slot="customRender" slot-scope="item">
            <vIcon type="home" />{{item.key}}
        </span>
        <a href="#" slot="extra">More</a>
        {{ contentList[key] }}
    </vCard>
    <br /><br />
    <vCard style="width:100%" :tabList="tabListNoTitle" :activeTabKey="noTitleKey"
        @tabChange="key => onTabChange(key, 'noTitleKey')">
        <p v-if="noTitleKey === 'article'">article content</p>
        <p v-else-if="noTitleKey === 'app'">app content</p>
        <p v-else-if="noTitleKey === 'project'">project content</p>
    </vCard>
</div>
</template>

<script>
export default {
    data() {
        return {
            tabList: [{
                key: 'tab1',
                // tab: 'tab1',
                scopedSlots: {
                    tab: 'customRender'
                }
            }, {
                key: 'tab2',
                tab: 'tab2',
            }],
            contentList: {
                tab1: 'content1',
                tab2: 'content2',
            },
            tabListNoTitle: [{
                key: 'article',
                tab: 'article',
            }, {
                key: 'app',
                tab: 'app',
            }, {
                key: 'project',
                tab: 'project',
            }],
            key: 'tab1',
            noTitleKey: 'app',
        }
    },
    methods: {
        onTabChange(key, type) {
            console.log('demo', key, type)
            this[type] = key
        },
    },
}
</script>
<style lang="less" scoped>
p{
    margin: 0;
    line-height: 1.5;
}
</style>

