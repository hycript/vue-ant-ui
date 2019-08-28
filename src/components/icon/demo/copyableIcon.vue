<style lang="less" scoped>
.icon-wrapper{
    width: 100px;
    height: 100px;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    text-align: center;
    transition: all 0.5s;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;

    &:hover{
        border-color: #3eaf7c;
        color: #3eaf7c;
        box-shadow: 0px 0px 15px rgba(62, 175, 124, 0.35);
    }

    .icon{
        font-size: 2.6rem;
        margin-bottom: 0.6rem;
    }

    .name{
        white-space: nowrap;
    }
}
</style>
<template>
<div class="icon-wrapper" @click="click">
    <Icon class="icon" :type="type" />
    <div class="name">{{ type }}</div>
</div>
</template>
<script>
import copy from 'copy-to-clipboard';
import PropTypes from '~utils/vue-types';

export default {
    props: {
        type: PropTypes.string.isRequired,
    },
    methods: {
        click(){
            const { type } = this;
            const text = `<Icon type="${type}" />`;
            copy(text);
        }
    }
}
</script>
