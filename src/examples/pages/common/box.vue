<style lang="less">
@import '../../style/common.less';
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
        &.title {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 0.5em;
            & + p {
                margin-top: 0;
            }
        }
    }
    .subtit {
        font-size: 1em;
        font-weight: bold;
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
