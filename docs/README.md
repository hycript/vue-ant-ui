# Home 

## DEMO

<Test></Test> 

<Demo></Demo>

<Code>
<Temp></Temp>
</Code>

<div>
<vBadge @click="log" :count="100">
    <Button>Badge</Button>
</vBadge>
<vBadge :numberStyle="{fontSize: '18px'}" :count="100">
    <Icon slot="count" type="clock-circle" style="color: #f5222d" @mouseenter="log" />
    <Button>Badge</Button>
</vBadge>
</div>
<div style="marginTop: 10px">
<vBadge count="25" />
<vBadge count="4" :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
<vBadge count="109"  :overflowCount="10" :numberStyle= "{backgroundColor: '#52c41a'} " />
</div>


<div style="marginTop: 10px">
<vBadge :count="100" dot>
    <Button>Badge</Button>
</vBadge>
</div>

<script>
import Demo from '~comps/button/demo/demo';
import Test from './.vuepress/test.md';
import Temp from '~comps/popconfirm/demo/basic';
export default {
    components: {
        Demo,
        Test,
        Temp,
    },
    created(){
        console.log(this);
    },
    methods: {
        log(e){
            console.log(e.type, e);
        }
    }
}
</script>

