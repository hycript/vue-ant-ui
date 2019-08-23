<style lang="less">
@import '../style/common.less';
.box {
    margin: 20px;
    padding: 20px;
    border-radius: 2px;
    border: 1px solid @borderColor;
    p {
        margin-top: 1.5em;
        margin-bottom: 1em;
        &:first-child {
            margin-top: 0;
        }
    }

    .title {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 0.5em;
        & + p {
            margin-top: 0;
        }
    }

    blockquote{
        font-size: 80%;
        color: #697b8c;
        border-left: 4px solid #ebedf0;
        padding-left: 0.8em;
        margin: 1em 0;
    }

    code{
        margin: 0 1px;
        background: #f2f4f5;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 0.9em;
        border: 1px solid #eee;
    }

    ul{
        padding-left: 20px;
    }

    .subtit {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }
}
</style>
<template>
<div class="box">
    <slot></slot>
</div>
</template>
<script>
export default {

}
</script>
