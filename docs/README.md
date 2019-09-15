# Home 

## DEMO

<Test></Test> 

<TestC></TestC>


---

<v-avatar 
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
    shape="square" size="64"
    style="color: #f56a00; backgroundColor: #fde3cf"
></v-avatar>

<v-avatar 
    shape="square" size="64"
    style="color: #f56a00; backgroundColor: #fde3cf"
>U</v-avatar>


<script>
import Test from './.vuepress/test.md';
import TestC from './.vuepress/test.vue';
export default {
    components: {
        Test,
        TestC,
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

