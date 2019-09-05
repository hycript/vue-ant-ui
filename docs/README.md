# Home 

## DEMO

<Test></Test> 

<Demo></Demo>

<Code>
<Temp></Temp>
</Code>

---

<Avatar 
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
    shape="square" size="64"
    style="color: #f56a00; backgroundColor: #fde3cf"
></Avatar>

<Avatar 
    shape="square" size="64"
    style="color: #f56a00; backgroundColor: #fde3cf"
>U</Avatar>

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

