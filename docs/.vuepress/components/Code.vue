<style lang="less" scoped>
.code-container{
    border: 1px solid #eee;
    border-radius: 6px;
    margin: 1em 0;
    .code-body{
        position: relative;
        padding: 1em;
        .ico-wrapper{
            position: absolute;
            right: 1em;
            bottom: 0.5em;
            line-height: 0;
            // display: flex;
            // justify-content: flex-end;
        }
        .ico{
            cursor: pointer;
            width: 16px;
            height: 16px;
            opacity: 0.15;
            transition: opacity 0.5s;
            &.visible{
                opacity: 1;
            }
        }
        .tooltip-title{
            // white-space: nowrap;
        }
    }
    .code-area{
        margin-bottom: -0.85rem;
        margin-top: -0.85rem;
    }
    &:hover {
        .ico{
            opacity: 1;
        }
    }
}

</style>
<template>
<div class="code-container">
    <div class="code-body">
        <slot></slot>
        <div v-if="$slots && $slots.code" class="ico-wrapper">
            <vTooltip :visible="false">
                <span class="tooltip-title" slot="title">{{ !visible ? 'show' : 'hide' }} code</span>
                <div class="ico" :class="{ visible: visible}" @click="visible = !visible">
                    <img v-if="!visible" src="@/assets/code1.svg" alt="">
                    <img v-else class="visible" src="@/assets/code2.svg" alt="">
                </div>
            </vTooltip>
        </div>
    </div>
    <div v-if="visible" class="code-area">
        <slot name="code"></slot>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            visible: false,
        }
    }
}
</script>
