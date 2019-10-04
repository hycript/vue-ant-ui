<template>
<div class="icons-list">
    <vIconFont type="icon-tuichu" />
    <vIconFont type="icon-facebook" />
    <vIconFont type="icon-twitter" />
</div>
</template>
<script>
import Icon from '../icon';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})

export default {

}
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
