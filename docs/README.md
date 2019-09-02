# Home 

## DEMO

<Test></Test> 

<Demo></Demo>

<Code>
<Temp></Temp>
</Code>

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
    }
}
</script>

