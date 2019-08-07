<script>
export default {
    data(){
        return {
            clicked: false,
        }
    },
    created(){
        this.timeout = null;
    },
    methods: {
        updateClickState(){
            this.clicked = true;
            !!this.timeout && clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.clicked = false;
            }, 500)
        }
    },
    beforeDestroy(){
        !!this.timeout && clearTimeout(this.timeout);
    }
}
</script>
