# Home 

## DEMO

<Test></Test> 

<TestC></TestC>


---


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

